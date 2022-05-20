import React from 'react'
import {v1} from 'uuid'
import cx from 'clsx'
import {UsersPropsType} from './UsersContainer'
import {Avatar, Button, Divider, Link, makeStyles, NoSsr} from '@material-ui/core'
import {useDynamicAvatarStyles} from '@mui-treasury/styles/avatar/dynamic'
import {Column, Item, Row} from '@mui-treasury/components/flex'
import GoogleFontLoader from 'react-google-font-loader'

const usePersonStyles = makeStyles(() => ({
  text: {
    fontFamily: 'Barlow, san-serif',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  name: {
    fontWeight: 600,
    fontSize: '1rem',
    color: '#122740'
  },
  caption: {
    fontSize: '0.875rem',
    color: '#758392',
    marginTop: -4
  },
  btn: {
    borderRadius: 20,
    padding: '0.125rem 0.75rem',
    borderColor: '#becddc',
    fontSize: '0.75rem'
  },
  card: {
    width: '50rem',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden'
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px'
  }
}))

export const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

  if (usersPage.users.length === 0) {
    setUsers([
      {
        id: v1(),
        photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        followed: true,
        fullName: 'Anton',
        status: 'Just learning',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: v1(),
        photoUrl: '',
        followed: true,
        fullName: 'Dasha',
        status: 'Ya micro ecolog',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: v1(),
        photoUrl: '',
        followed: false,
        fullName: 'Dima',
        status: 'Istinnyi zadrot v tanki',
        location: {city: 'Kiev', country: 'Ukraine'}
      }
    ])
  }

  const avatarStyles = useDynamicAvatarStyles({size: 56})
  const styles = usePersonStyles()

  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{font: 'Barlow', weights: [400, 600]}]}/>
      </NoSsr>
      <Column p={0} gap={0} className={styles.card}>
        <UsersHeader/>
        {
          usersPage.users.map((u, i) => {
            return (
              <div key={u.id}>
                <Row gap={2} p={2.5}>
                  <Item>
                    <Avatar classes={avatarStyles} src={u.photoUrl} alt="avatar"/>
                  </Item>
                  <Row wrap grow gap={0.5} minWidth={0}>
                    <Item grow minWidth={0}>
                      <div className={cx(styles.name, styles.text)}>{u.fullName}</div>
                      <div className={cx(styles.caption, styles.text)}>{u.location.city}, {u.location.country}</div>
                      <div className={styles.text}>{u.status}</div>
                    </Item>
                    <Item position={'middle'}>
                      {
                        u.followed
                          ? <Button className={styles.btn} variant={'outlined'}
                                    onClick={() => unfollow(u.id)}>Unfollow</Button>
                          : <Button className={styles.btn} variant={'outlined'}
                                    onClick={() => follow(u.id)}>Follow</Button>
                      }
                    </Item>
                  </Row>
                </Row>
                {i !== usersPage.users.length - 1 ? <Divider variant={'middle'} className={styles.divider}/> : ''}
              </div>
            )
          })
        }
      </Column>
    </>
  )
}

const useStyles = makeStyles(() => ({
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff'
  },
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
    cursor: 'pointer'
  },
  actions: {
    color: '#BDC9D7'
  }
}))

const UsersHeader = () => {
  const styles = useStyles()
  return (
    <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
      <Item stretched className={styles.headline}>Who to follow</Item>
      <Item className={styles.actions}>
        <Link className={styles.link}>Refresh</Link> •{' '}
        <Link className={styles.link}>See all</Link>
      </Item>
    </Row>
  )
}

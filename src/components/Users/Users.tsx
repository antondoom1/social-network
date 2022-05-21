import React from 'react'
// import {v1} from 'uuid'
import {UsersPropsType} from './UsersContainer'
import {Avatar, Button, Divider, Link, makeStyles, NoSsr} from '@material-ui/core'
import {Column, Item, Row} from '@mui-treasury/components/flex'
import GoogleFontLoader from 'react-google-font-loader'
import axios from 'axios'
import {AppStateType} from '../../redux/redux-store'
import s from './Users.module.css'

export class Users extends React.Component<UsersPropsType, AppStateType> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
    // setUsers([
    //   {
    //     id: v1(),
    //     photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
    //     followed: true,
    //     fullName: 'Anton',
    //     status: 'Just learning',
    //     location: {city: 'Minsk', country: 'Belarus'}
    //   },
    //   {
    //     id: v1(),
    //     photoUrl: '',
    //     followed: true,
    //     fullName: 'Dasha',
    //     status: 'Ya micro ecolog',
    //     location: {city: 'Moscow', country: 'Russia'}
    //   },
    //   {
    //     id: v1(),
    //     photoUrl: '',
    //     followed: false,
    //     fullName: 'Dima',
    //     status: 'Istinnyi zadrot v tanki',
    //     location: {city: 'Kiev', country: 'Ukraine'}
    //   }
    // ])
  }

  render() {
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{font: 'Barlow', weights: [400, 600]}]}/>
        </NoSsr>
        <Column p={0} gap={0} className={s.card}>
          <UsersHeader/>
          {
            this.props.usersPage.users.map((u, i) => {
              return (
                <div key={u.id}>
                  <Row gap={2} p={2.5}>
                    <Item>
                      <Avatar className={s.avatar} /*src={u.photoUrl}*/ alt="avatar"/>
                    </Item>
                    <Row wrap grow gap={0.5} minWidth={0}>
                      <Item grow minWidth={0}>
                        <div className={s.name + ' ' + s.text}>{u.name}</div>
                        {/*<div className={cx(styles.caption, styles.text)}>{u.location.city}, {u.location.country}</div>*/}
                        <div className={s.text}>{u.status}</div>
                      </Item>
                      <Item position={'middle'}>
                        {
                          u.followed
                            ? <Button className={s.btn} variant={'outlined'}
                                      onClick={() => this.props.unfollow(u.id)}>Unfollow</Button>
                            : <Button className={s.btn} variant={'outlined'}
                                      onClick={() => this.props.follow(u.id)}>Follow</Button>
                        }
                      </Item>
                    </Row>
                  </Row>
                  {i !== this.props.usersPage.users.length - 1 ?
                    <Divider className={s.divider} variant={'middle'}/> : ''}
                </div>
              )
            })
          }
        </Column>
      </>
    )
  }
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

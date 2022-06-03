import React from 'react'
import {Avatar, Button, Divider, Link, makeStyles, NoSsr} from '@material-ui/core'
import GoogleFontLoader from 'react-google-font-loader'
import {Column, Item, Row} from '@mui-treasury/components/flex'
import s from './Users.module.css'
import {Pagination} from '@material-ui/lab'
import {InitialStateType} from '../../redux/users-reducer'

type UsersType = {
  usersPage: InitialStateType
  onPageChanged: (pageNumber: number) => void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
}

export const Users: React.FC<UsersType> = ({usersPage, onPageChanged, follow, unfollow}) => {

  let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)

  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{font: 'Barlow', weights: [400, 600]}]}/>
      </NoSsr>
      <Column p={0} gap={0} className={s.card}>
        <UsersHeader/>
        {
          usersPage.users.map((u) => {
            return (
              <div key={u.id}>
                <Row gap={2} p={2.5}>
                  <Item>
                    <Avatar className={s.avatar}
                            src={u.photos.small !== null ? u.photos.small : ''}
                            alt="avatar"/>
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
                                    onClick={() => unfollow(u.id)}>Unfollow</Button>
                          : <Button className={s.btn} variant={'outlined'}
                                    onClick={() => follow(u.id)}>Follow</Button>
                      }
                    </Item>
                  </Row>
                </Row>
                <Divider className={s.divider} variant={'middle'}/>
              </div>
            )
          })
        }
        <Pagination
          style={{margin: '20px auto'}}
          count={pagesCount}
          onChange={(event, page) => onPageChanged(page)}
          page={usersPage.currentPage}/>
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

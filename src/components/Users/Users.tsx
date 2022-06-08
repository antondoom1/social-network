import React from 'react'
import {Avatar, Button, Divider, NoSsr} from '@material-ui/core'
import GoogleFontLoader from 'react-google-font-loader'
import {Column, Item, Row} from '@mui-treasury/components/flex'
import s from './Users.module.css'
import {Pagination} from '@material-ui/lab'
import {InitialStateType} from '../../redux/users-reducer'
import {NavLink} from 'react-router-dom'
import {UsersHeader} from './UsersHeader'
import axios from 'axios'

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
                    <NavLink to={'/profile/' + u.id}>
                      <Avatar className={s.avatar}
                              src={u.photos.small !== null ? u.photos.small : ''}
                              alt="avatar"/>
                    </NavLink>
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
                                    onClick={() => {
                                      axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                          withCredentials: true,
                                          headers: {
                                            'API-KEY': 'fb079428-865b-4dce-9f17-92639917cedb'
                                          }
                                        })
                                        .then((response) => {
                                          if (response.data.resultCode === 0) {
                                            unfollow(u.id)
                                          }
                                        })
                                    }
                                    }>Unfollow</Button>
                          : <Button className={s.btn} variant={'outlined'}
                                    onClick={() => {
                                      axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                          withCredentials: true,
                                          headers: {
                                            'API-KEY': 'fb079428-865b-4dce-9f17-92639917cedb'
                                          }
                                        })
                                        .then((response) => {
                                          if (response.data.resultCode === 0) {
                                            follow(u.id)
                                          }
                                        })
                                    }
                                    }>Follow</Button>
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


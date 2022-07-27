import React from 'react'
import {NoSsr} from '@material-ui/core'
import GoogleFontLoader from 'react-google-font-loader'
import {Column} from '@mui-treasury/components/flex'
import s from './Users.module.css'
import {Pagination} from '@material-ui/lab'
import {InitialStateType} from '../../redux/users-reducer'
import {UsersHeader} from './UsersHeader'
import {User} from './User'

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
              <User
                key={u.id}
                user={u}
                followingInProgress={usersPage.followingInProgress}
                unfollow={unfollow}
                follow={follow}
              />
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
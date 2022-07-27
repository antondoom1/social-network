import {UserType} from '../../types/entities'
import React from 'react'
import {Item, Row} from '@mui-treasury/components/flex'
import {NavLink} from 'react-router-dom'
import {Avatar, Button, Divider} from '@material-ui/core'
import s from './Users.module.css'

type UserPropsType = {
  user: UserType
  followingInProgress: number[]
  follow: (userID: number) => void
  unfollow: (userID: number) => void
}

export const User: React.FC<UserPropsType> = ({user, followingInProgress, follow, unfollow}) => {
  return (
    <div>
      <Row gap={2} p={2.5}>
        <Item>
          <NavLink to={'/profile/' + user.id}>
            <Avatar className={s.avatar}
                    src={user.photos.small !== null ? user.photos.small : ''}
                    alt="avatar"/>
          </NavLink>
        </Item>
        <Row wrap grow gap={0.5} minWidth={0}>
          <Item grow minWidth={0}>
            <div className={s.name + ' ' + s.text}>{user.name}</div>
            {/*<div className={cx(styles.caption, styles.text)}>{u.location.city}, {u.location.country}</div>*/}
            <div className={s.text}>{user.status}</div>
          </Item>
          <Item position={'middle'}>
            {
              user.followed
                ? <Button disabled={followingInProgress
                  .some(id => id === user.id)}
                          className={s.btn}
                          variant={'outlined'}
                          onClick={() => unfollow(user.id)}>Unfollow
                </Button>
                : <Button disabled={followingInProgress
                  .some(id => id === user.id)}
                          className={s.btn}
                          variant={'outlined'}
                          onClick={() => follow(user.id)}>Follow
                </Button>
            }
          </Item>
        </Row>
      </Row>
      <Divider className={s.divider} variant={'middle'}/>
    </div>
  )
}
import {connect} from 'react-redux'
import {
  followAC,
  InitialStateType,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  unfollowAC
} from '../../redux/users-reducer'
import {Dispatch} from 'redux'
import {AppStateType} from '../../redux/redux-store'
import {UserType} from '../../types/entities'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'

type MapStateToPropsType = {
  usersPage: InitialStateType
}

type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setUsersTotalCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setUsersTotalCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <Users
        usersPage={this.props.usersPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    usersPage: state.usersPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => dispatch(followAC(userId)),
    unfollow: (userId: number) => dispatch(unfollowAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
    setUsersTotalCount: (totalUsersCount: number) => dispatch(setUsersTotalCountAC(totalUsersCount))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
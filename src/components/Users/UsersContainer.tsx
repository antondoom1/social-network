import {connect} from 'react-redux'
import {
  follow, InitialStateType, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow
} from '../../redux/users-reducer'
import {AppStateType} from '../../redux/redux-store'
import {UserType} from '../../types/entities'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'

type MapStateToPropsType = {
  usersPage: InitialStateType
}

type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setUsersTotalCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`, {
        withCredentials: true
      })
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setUsersTotalCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`, {
        withCredentials: true
      })
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.usersPage.isFetching
          ? <Preloader/>
          : <Users
            usersPage={this.props.usersPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}/>
        }
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    usersPage: state.usersPage
  }
}

export const UsersContainer = connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersAPIComponent)
import {connect} from 'react-redux'
import {
  follow, InitialStateType, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow
} from '../../redux/users-reducer'
import {AppStateType} from '../../redux/redux-store'
import {UserType} from '../../types/entities'
import React from 'react'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import {usersAPI} from '../../api/api'

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

    usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setUsersTotalCount(data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
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
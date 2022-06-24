import {connect} from 'react-redux'
import {
  follow, getUsers,
  InitialStateType,
  setCurrentPage,
  unfollow
} from '../../redux/users-reducer'
import {AppStateType} from '../../redux/redux-store'
import React from 'react'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

type MapStateToPropsType = {
  usersPage: InitialStateType
}

type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType, AppStateType> {
  componentDidMount() {
    this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
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
            unfollow={this.props.unfollow}
          />
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

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})
)(UsersContainer)
import {connect} from 'react-redux'
import {followAC, InitialStateType, setUsersAC, unfollowAC} from '../../redux/users-reducer'
import {Dispatch} from 'redux'
import {AppStateType} from '../../redux/redux-store'
import {UserType} from '../../types/entities'
import {Users} from './Users'

type MapStateToPropsType = {
  usersPage: InitialStateType
}

type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    usersPage: state.usersPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => dispatch(followAC(userId)),
    unfollow: (userId: number) => dispatch(unfollowAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
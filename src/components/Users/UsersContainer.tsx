import {connect} from 'react-redux'
import {Users} from './Users'
import {followAC, InitialStateType, setUsersAC, unfollowAC} from '../../redux/users-reducer'
import {Dispatch} from 'redux'
import {AppStateType} from '../../redux/redux-store'
import {UserType} from '../../types/entities'

type MapStateToPropsType = {
  usersPage: InitialStateType
}

type MapDispatchToPropsType = {
  follow: (userID: string) => void
  unfollow: (userID: string) => void
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
    follow: (userId: string) => dispatch(followAC(userId)),
    unfollow: (userId: string) => dispatch(unfollowAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
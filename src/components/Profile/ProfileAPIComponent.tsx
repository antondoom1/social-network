import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {Profile} from './Profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {ProfileType} from '../../types/entities'
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'

export type MapStateToPropsType = {
  profile: ProfileType
  isAuth?: boolean
}
type MapDispatchToPropsType = {
  getUserProfile: (userId: string) => void
}
type PathParamsType = {
  userId: string
}

export type ProfilePropsType = MapStateToPropsType
  & MapDispatchToPropsType
  & RouteComponentProps<PathParamsType>

export class ProfileAPIComponent extends React.Component<ProfilePropsType, AppStateType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '23999'

    this.props.getUserProfile(userId)
  }

  componentDidUpdate() {
    document.title = this.props.profile.fullName
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>

    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent)

export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)


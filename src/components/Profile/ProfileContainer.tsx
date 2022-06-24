import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {Profile} from './Profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {ProfileType} from '../../types/entities'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'

export type MapStateToPropsType = {
  profile: ProfileType
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

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '23999'

    this.props.getUserProfile(userId)
  }

  componentDidUpdate() {
    document.title = this.props.profile.fullName
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {Profile} from './Profile'
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {ProfileType} from '../../types/entities'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'

type MapStateToPropsType = {
  profile: ProfileType
  status: string | null
}
type MapDispatchToPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}
type PathParamsType = {
  userId: string
}

type ProfilePropsType = MapStateToPropsType
  & MapDispatchToPropsType
  & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '23999'

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidUpdate() {
    document.title = this.props.profile.fullName
  }

  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}/>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
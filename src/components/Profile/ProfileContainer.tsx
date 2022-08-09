import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {Profile} from './Profile'
import {getStatus, getUserProfile, savePhoto, updateStatus} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {ProfileType} from '../../types/entities'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'

type MapStateToPropsType = {
  profile: ProfileType
  status: string | null
  authorizedUserId: number | null
  isAuth: boolean
}
type MapDispatchToPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
  savePhoto: (photoFile: File) => void
}
type PathParamsType = {
  userId: string
}

type ProfilePropsType = MapStateToPropsType
  & MapDispatchToPropsType
  & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = String(this.props.authorizedUserId)
      if (!userId) {
        this.props.history.push('/login')
      }
    }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfilePropsType>) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
    document.title = this.props.profile.fullName
  }

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}
      />
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {Profile} from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import axios from 'axios'
import {connect} from 'react-redux'
import {ProfileType} from '../../types/entities'
import {RouteComponentProps, withRouter} from 'react-router-dom'

export type MapStateToPropsType = {
  profile: ProfileType
}
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
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

const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)


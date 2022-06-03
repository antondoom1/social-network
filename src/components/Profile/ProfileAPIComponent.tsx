import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {Profile} from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import axios from 'axios'
import {connect} from 'react-redux'
import {ProfileType} from '../../types/entities'

export type MapStateToPropsType = {
  profile: ProfileType
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileAPIComponent extends React.Component<ProfilePropsType, AppStateType> {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
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

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIComponent)


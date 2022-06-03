import React from 'react'
import s from './ProfileInfoHeader.module.css'
import {Paper} from '@material-ui/core'
import {MapStateToPropsType} from '../ProfileAPIComponent'

export const ProfileHeader: React.FC<MapStateToPropsType> = ({profile}) => {
  return (
    <Paper elevation={2} className={s.containerProfileInfo}>
      <div className={s.bodyProfileInfo}>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/03/13/53/banner-1711718_960_720.jpg"
          alt="profileHeaderBg"/>
      </div>
      <div className={s.descriptionBlock}>
        <figure>
          <img src={profile.photos.small !== null ? profile.photos.small : ''} alt="ava"/>
        </figure>
        <h4>
          {profile.fullName}
          <span>{profile.contacts.vk}</span>
        </h4>
      </div>
    </Paper>
  )
}



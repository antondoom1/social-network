import React from 'react'
import s from './ProfileHeader.module.css'
import {Avatar, Paper} from '@material-ui/core'
import {MapStateToPropsType} from '../ProfileAPIComponent'

export const ProfileHeader: React.FC<MapStateToPropsType> = ({profile}) => {
  return (
    <Paper elevation={2} className={s.profileHeaderWrapper}>
      <div className={s.profileHeaderImage}>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/03/13/53/banner-1711718_960_720.jpg"
          alt="profileHeaderImage"/>
      </div>
      <div className={s.avatarBlock}>
        <figure>
          <div className={s.avatarContainer}>
            <Avatar className={s.avatar} src={profile.photos.small !== null ? profile.photos.small : ''} alt="ava"/>
          </div>
        </figure>
        <h4>
          {profile.fullName}
          {
            profile.contacts.vk
              ? <span>{profile.contacts.vk}</span>
              : <span style={{opacity: '0'}}>empty</span>
          }
        </h4>
      </div>
    </Paper>
  )
}



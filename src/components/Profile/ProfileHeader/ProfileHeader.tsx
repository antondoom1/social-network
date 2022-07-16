import React from 'react'
import s from './ProfileHeader.module.css'
import {Avatar, Paper} from '@material-ui/core'
// import ProfileStatus from './ProfileStatus/ProfileStatus'
import {ProfilePropsType} from '../Profile'
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks'

export const ProfileHeader: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
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
            // status
            //   ? <ProfileStatus status={status} updateStatus={updateStatus}/>
            //   : <span style={{opacity: '0'}}>invisible span</span>
            // <ProfileStatus status={status} updateStatus={updateStatus}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          }
        </h4>
      </div>
    </Paper>
  )
}



import React, {ChangeEvent} from 'react'
import s from './ProfileHeader.module.css'
import {Avatar, Badge, IconButton, Paper, Tooltip} from '@material-ui/core'
// import ProfileStatus from './ProfileStatus/ProfileStatus'
import {ProfilePropsType} from '../Profile'
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks'
import {Preloader} from '../../common/Preloader/Preloader'
import {PhotoCamera} from '@material-ui/icons'

export const ProfileHeader: React.FC<ProfilePropsType> = ({isOwner, profile, status, updateStatus, savePhoto}) => {

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      savePhoto(e.currentTarget.files[0])
    }
  }

  const profileAvatar = <Avatar
    className={s.avatar}
    src={profile.photos.small !== null ? profile.photos.small : ''}
    alt="avatar"
  />

  if (!profile) {
    return <Preloader/>
  }

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
            {isOwner
              ? <Badge
                style={{margin: '0'}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                overlap={'circle'}
                showZero={true}
                badgeContent={
                  <>
                    <input style={{display: 'none'}} type="file" onChange={onMainPhotoSelected} id="icon-button-photo"/>
                    <label htmlFor="icon-button-photo">
                      <Tooltip title={'Update photo'} placement="bottom-start">
                        <IconButton component="span" style={{padding: '2px', backgroundColor: '#fff'}}>
                          <PhotoCamera/>
                        </IconButton>
                      </Tooltip>
                    </label>
                  </>
                }>
                {profileAvatar}
              </Badge>
              : profileAvatar
            }
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



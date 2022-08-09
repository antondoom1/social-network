import React from 'react'
import {ProfileHeader} from './ProfileHeader/ProfileHeader'
import {SectionAbout} from './SectionAbout/SectionAbout'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {Grid} from '@material-ui/core'
import {ProfileType} from '../../types/entities'

export type ProfilePropsType = {
  isOwner: boolean
  profile: ProfileType
  status: string | null
  updateStatus: (status: string) => void
  savePhoto: (photoFile: File) => void
}

export const Profile: React.FC<ProfilePropsType> = ({isOwner, profile, status, updateStatus, savePhoto}) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ProfileHeader
          isOwner={isOwner}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          savePhoto={savePhoto}/>
      </Grid>
      <Grid item>
        <SectionAbout profile={profile} isOwner={isOwner}/>
      </Grid>
      <Grid item>
        <MyPostsContainer/>
      </Grid>
    </Grid>
  )
}
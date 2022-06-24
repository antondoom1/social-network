import React from 'react'
import {ProfileHeader} from './ProfileHeader/ProfileHeader'
import {SectionAbout} from './SectionAbout/SectionAbout'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {Grid} from '@material-ui/core'
import {ProfileType} from '../../types/entities'

export type ProfilePropsType = {
  profile: ProfileType
  status: string | null
  updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ProfileHeader profile={profile} status={status} updateStatus={updateStatus}/>
      </Grid>
      <Grid item>
        <SectionAbout profile={profile}/>
      </Grid>
      <Grid item>
        <MyPostsContainer/>
      </Grid>
    </Grid>
  )
}
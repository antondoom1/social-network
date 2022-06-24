import React from 'react'
import {ProfileHeader} from './ProfileHeader/ProfileHeader'
import {SectionAbout} from './SectionAbout/SectionAbout'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {MapStateToPropsType} from './ProfileContainer'
import {Grid} from '@material-ui/core'

export const Profile: React.FC<MapStateToPropsType> = ({profile}) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ProfileHeader profile={profile}/>
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
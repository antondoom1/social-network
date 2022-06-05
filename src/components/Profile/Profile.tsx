import React from 'react'
import s from './Profile.module.css'
import {ProfileHeader} from './ProfileHeader/ProfileHeader'
import {SectionAbout} from './SectionAbout/SectionAbout'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {MapStateToPropsType} from './ProfileAPIComponent'

export const Profile: React.FC<MapStateToPropsType> = ({profile}) => {
  return (
    <div className={s.profile}>
      <ProfileHeader profile={profile}/>
      <SectionAbout profile={profile}/>
      <MyPostsContainer/>
    </div>
  )
}



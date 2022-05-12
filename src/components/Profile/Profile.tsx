import React from 'react'
import s from './Profile.module.css'
import {ProfileInfoHeader} from './ProfileInfoHeader/ProfileInfoHeader'
import {SectionAbout} from './SectionAbout/SectionAbout'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfoHeader/>
      <SectionAbout/>
      <MyPostsContainer/>
    </div>
  )
}



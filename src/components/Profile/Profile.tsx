import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfoHeader} from './ProfileInfoHeader/ProfileInfoHeader'
import {ActionsTypes, ProfilePageType} from '../../redux/state'
import {SectionAbout} from './SectionAbout/SectionAbout'

export type ProfileType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {
  return (
    <div className={s.profile}>
      <ProfileInfoHeader/>
      <SectionAbout/>
      <MyPosts
        postsData={profilePage.posts}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  )
}



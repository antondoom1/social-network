import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfoHeader} from './ProfileInfoHeader/ProfileInfoHeader'
import {ProfilePageType} from '../../redux/state'
import {SectionAbout} from './SectionAbout/SectionAbout'

export type ProfileType = {
  profilePage: ProfilePageType
  createPost: () => void
  changePostText: (newPostMessage: string) => void
}

export const Profile: React.FC<ProfileType> = ({profilePage, createPost, changePostText}) => {
  return (
    <div className={s.profile}>
      <ProfileInfoHeader/>
      <SectionAbout/>
      <MyPosts
        postsData={profilePage.posts}
        newPostText={profilePage.newPostText}
        createPost={createPost}
        changePostText={changePostText}/>
    </div>
  )
}



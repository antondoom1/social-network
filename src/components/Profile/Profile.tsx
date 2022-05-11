import React from 'react'
import s from './Profile.module.css'
import {ProfileInfoHeader} from './ProfileInfoHeader/ProfileInfoHeader'
import {SectionAbout} from './SectionAbout/SectionAbout'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {RootStoreType} from '../../redux/redux-store'

export type ProfileType = {
  store: RootStoreType
}

export const Profile: React.FC<ProfileType> = ({store}) => {
  return (
    <div className={s.profile}>
      <ProfileInfoHeader/>
      <SectionAbout/>
      <MyPostsContainer store={store}/>
    </div>
  )
}



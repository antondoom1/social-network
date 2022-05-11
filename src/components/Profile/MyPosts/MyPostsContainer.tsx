import React from 'react'
import {changePostTextAC, createPostAC} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {RootStoreType} from '../../../redux/redux-store'

type MyPostsType = {
  store: RootStoreType
}

export const MyPostsContainer: React.FC<MyPostsType> = (props) => {
  let state = props.store.getState()

  const createPost = () => props.store.dispatch(createPostAC(state.profilePage.newPostText))

  const changePostText = (text: string) => {
    props.store.dispatch(changePostTextAC(text))
  }

  return (
    <MyPosts changePostText={changePostText}
             createPost={createPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}/>
  )
}



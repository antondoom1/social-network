import React from 'react'
import {changePostTextAC, createPostAC} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {StoreContext} from '../../../StoreContext'

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState().profilePage
          const createPost = () => store.dispatch(createPostAC())
          const changePostText = (text: string) => store.dispatch(changePostTextAC(text))

          return (
            <MyPosts changePostText={changePostText}
                     createPost={createPost}
                     profilePage={state}/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}



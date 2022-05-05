import {v1} from 'uuid'
import {ActionsTypes, PostType, ProfilePageType} from './state'

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case 'CREATE-POST':
      const newPost: PostType = {
        id: v1(),
        message: state.newPostText,
        likesCount: 0
      }
      state.posts.unshift(newPost)
      state.newPostText = ''
      return state
    case 'CHANGE-POST-TEXT':
      state.newPostText = action.newPostMessage
      return state
    default:
      return state
  }
}

export const createPostAC = (newPostText: string) => {
  return {
    type: 'CREATE-POST',
    newPost: newPostText
  } as const
}
export const changePostTextAC = (newPostMessage: string) => {
  return {
    type: 'CHANGE-POST-TEXT',
    newPostMessage: newPostMessage
  } as const
}
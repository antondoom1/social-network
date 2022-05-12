import {v1} from 'uuid'
import {PostType} from '../types/entities'

export type InitialStateType = {
  newPostText: string
  posts: Array<PostType>
}

let initialState: InitialStateType = {
  newPostText: '',
  posts: [
    {id: v1(), message: 'Nu privet', likesCount: 15},
    {id: v1(), message: 'Kak dela s Reactom?', likesCount: 20},
    {
      id: v1(),
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.',
      likesCount: 155
    },
    {id: v1(), message: 'Message from the past', likesCount: 255},
    {id: v1(), message: 'Message from the past', likesCount: 255},
    {id: v1(), message: 'Message from the past', likesCount: 255}
  ]
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerACType): InitialStateType => {
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

export type ProfileReducerACType = ReturnType<typeof createPostAC> | ReturnType<typeof changePostTextAC>

export const createPostAC = () => {
  return {
    type: 'CREATE-POST',
    newPost: initialState.newPostText
  } as const
}
export const changePostTextAC = (newPostMessage: string) => {
  return {
    type: 'CHANGE-POST-TEXT',
    newPostMessage: newPostMessage
  } as const
}
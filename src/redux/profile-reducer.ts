import {v1} from 'uuid'
import {PostType, ProfileType} from '../types/entities'
import {Dispatch} from 'redux'
import {profileAPI, usersAPI} from '../api/api'

export type InitialStateType = {
  posts: Array<PostType>
  profile: ProfileType
  status: string | null
}

let initialState: InitialStateType = {
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
  ],
  profile: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: null,
    fullName: '',
    userId: 2,
    photos: {
      small: null,
      large: null
    }
  },
  status: null
}


export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerACType): InitialStateType => {
  switch (action.type) {
    case 'CREATE-POST':
      const newPost: PostType = {
        id: v1(),
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts]
      }
    case 'SET-STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}

export type ProfileReducerACType = ReturnType<typeof createPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>

export const createPostAC = (newPostText: string) => {
  return {
    type: 'CREATE-POST',
    newPostText
  } as const
}
const setUserProfile = (profile: ProfileType) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  } as const
}
const setStatus = (status: string) => {
  return {
    type: 'SET-STATUS',
    status
  } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  usersAPI.getProfile(userId)
    .then((data) => {
      dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId)
    .then((data) => {
      dispatch(setStatus(data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status)
    .then((data) => {
      if (data.resultCode === 0) dispatch(setStatus(status))
    })
}
import {UserType} from '../types/entities'

export type InitialStateType = {
  users: Array<UserType>
}

let initialState: InitialStateType = {
  users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerACType): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
      }
    case 'SET-USERS':
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

export type UsersReducerACType =
  ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
  return {
    type: 'FOLLOW',
    userID
  } as const
}
export const unfollowAC = (userID: number) => {
  return {
    type: 'UNFOLLOW',
    userID
  } as const
}
export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: 'SET-USERS',
    users
  } as const
}

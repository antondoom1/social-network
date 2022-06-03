import {UserType} from '../types/entities'

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number,
  totalUsersCount: number,
  currentPage: number
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1
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
        users: action.users
      }
    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SET-TOTAL-USERS-COUNT':
      return {
        ...state,
        totalUsersCount: action.count
      }
    default:
      return state
  }
}

export type UsersReducerACType =
  ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setUsersTotalCountAC>

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
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage
  } as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    count: totalUsersCount
  } as const
}


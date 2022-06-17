import {UserType} from '../types/entities'
import {usersAPI} from '../api/api'
import {Dispatch} from 'redux'

export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
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
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'TOGGLE-IS-FOLLOWING-PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export type UsersReducerACType =
  ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userID: number) => {
  return {
    type: 'FOLLOW',
    userID
  } as const
}
export const unfollowSuccess = (userID: number) => {
  return {
    type: 'UNFOLLOW',
    userID
  } as const
}
export const setUsers = (users: Array<UserType>) => {
  return {
    type: 'SET-USERS',
    users
  } as const
}
export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage
  } as const
}
export const setUsersTotalCount = (totalUsersCount: number) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    count: totalUsersCount
  } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: 'TOGGLE-IS-FETCHING',
    isFetching
  } as const
}
export const toggleFollowingProgress = (userId: number, isFetching: boolean) => {
  return {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    userId, isFetching
  } as const
}


export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setUsersTotalCount(data.totalCount))
    })
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(userId, true))
  usersAPI.follow(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(userId, false))
    })
}

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(userId, true))
  usersAPI.unfollow(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(userId, false))
    })
}


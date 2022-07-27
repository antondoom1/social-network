import {UserType} from '../types/entities'
import {usersAPI} from '../api/api'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux-store'
import {Dispatch} from 'redux'

let initialState: InitialStateType = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
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

// types
export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type UsersReducerActionsType =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

type UsersReducerThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, UsersReducerActionsType>

// actions
export const followSuccess = (userID: number) => ({
  type: 'FOLLOW',
  userID
} as const)

export const unfollowSuccess = (userID: number) => ({
  type: 'UNFOLLOW',
  userID
} as const)

export const setUsers = (users: Array<UserType>) => ({
  type: 'SET-USERS',
  users
} as const)

export const setCurrentPage = (currentPage: number) => ({
  type: 'SET-CURRENT-PAGE',
  currentPage
} as const)

export const setUsersTotalCount = (totalUsersCount: number) => ({
  type: 'SET-TOTAL-USERS-COUNT',
  count: totalUsersCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
  type: 'TOGGLE-IS-FETCHING',
  isFetching
} as const)

export const toggleFollowingProgress = (userId: number, isFetching: boolean) => ({
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
  userId, isFetching
} as const)

// thunks
export const requestUsers = (page: number, pageSize: number): UsersReducerThunkType => async (dispatch) => {
  dispatch(toggleIsFetching(true))

  let data = await usersAPI.getUsers(page, pageSize)

  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setUsersTotalCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: Function, actionCreator: Function) => {
  dispatch(toggleFollowingProgress(userId, true))

  let data = await apiMethod(userId)

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(toggleFollowingProgress(userId, false))
}

export const follow = (userId: number): UsersReducerThunkType => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number): UsersReducerThunkType => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
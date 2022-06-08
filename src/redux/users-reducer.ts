import {UserType} from '../types/entities'

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
  ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

export const follow = (userID: number) => {
  return {
    type: 'FOLLOW',
    userID
  } as const
}
export const unfollow = (userID: number) => {
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

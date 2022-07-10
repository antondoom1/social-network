import {authAPI} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux-store'

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

export const authsReducer = (state: InitialStateType = initialState, action: AuthReducerActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET-USER-DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

// types
export type InitialStateType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

type AuthReducerActionsTypes =
  | ReturnType<typeof setAuthUserData>
  | FormAction

type AuthReducerThunkType<ReturnType = void> = ThunkAction<ReturnType | Promise<ReturnType>, AppStateType, unknown, AuthReducerActionsTypes>

// actions
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: 'SET-USER-DATA',
  payload: {id: userId, login, email, isAuth}
} as const)

// thunks
export const getAuthUserData = (): AuthReducerThunkType => (dispatch) => {
  return authAPI.me()
    .then((data) => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
      }
    })
}

export const login = (email: string, password: string, rememberMe: boolean): AuthReducerThunkType => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
      }
    })
}

export const logout = (): AuthReducerThunkType => (dispatch) => {
  authAPI.logout()
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}
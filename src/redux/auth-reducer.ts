import {authAPI, securityAPI} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux-store'

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
}

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'AUTH/SET-USER-DATA':
      return {
        ...state,
        ...action.payload
      }
    case 'AUTH/GET-CAPTCHA-URL-SUCCESS':
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl
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
  captchaUrl: string | null
}

type AuthReducerActionsTypes =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof getCaptchaUrlSuccess>
  | FormAction

type AuthReducerThunkType<ReturnType = void> = ThunkAction<ReturnType | Promise<ReturnType>, AppStateType, unknown, AuthReducerActionsTypes>

// actions
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: 'AUTH/SET-USER-DATA',
  payload: {id: userId, login, email, isAuth}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
  type: 'AUTH/GET-CAPTCHA-URL-SUCCESS',
  payload: {captchaUrl}
} as const)

// thunks
export const getAuthUserData = (): AuthReducerThunkType => async (dispatch) => {
  let data = await authAPI.me()

  if (data.resultCode === 0) {
    let {id, login, email} = data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean): AuthReducerThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe)

  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}

export const logout = (): AuthReducerThunkType => async (dispatch) => {
  let data = await authAPI.logout()

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = (): AuthReducerThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(data.url))
}
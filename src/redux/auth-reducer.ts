import {Dispatch} from 'redux'
import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

export type InitialStateType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

export const authsReducer = (state: InitialStateType = initialState, action: setAuthUserDataType): InitialStateType => {
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

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
  return {
    type: 'SET-USER-DATA',
    payload: {id: userId, login, email, isAuth}
  } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then((data) => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
      }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then((data) => {
      if (data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData())
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
      }
    })
}

export const logout = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}
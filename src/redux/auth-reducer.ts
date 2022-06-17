import {Dispatch} from 'redux'
import {authAPI} from '../api/api'

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
        ...action.payload,
        isAuth: true
      }
    default:
      return state
  }
}

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, login: string, email: string) => {
  return {
    type: 'SET-USER-DATA',
    payload: {id: userId, login, email}
  } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then((data) => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email))
      }
    })
}
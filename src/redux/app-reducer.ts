import {getAuthUserData} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux-store'

let initialState: InitialStateType = {
  initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED-SUCCESS':
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

// types
export type InitialStateType = {
  initialized: boolean
}

export type AppReducerActionsType = ReturnType<typeof initializedSuccess>

type AppReducerThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducerActionsType>

// actions
export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)

// thunks
export const initializeApp = (): AppReducerThunkType => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  promise?.then(() => dispatch(initializedSuccess()))
}
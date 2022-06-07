import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'
import {authsReducer} from './auth-reducer'

export type AppStateType = ReturnType<typeof rootReducer>
// export type RootStoreType = typeof store
// export type AppDispatch = typeof store.dispatch

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authsReducer
})

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store
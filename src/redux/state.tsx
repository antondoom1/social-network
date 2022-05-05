import {v1} from 'uuid'
import {changePostTextAC, createPostAC, profileReducer} from './profile-reducer'
import {addMessageAC, changeMessageAC, dialogsReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'

export type MessageType = {
  id: string
  message: string
}
export type DialogType = {
  id: string
  name: string
}
export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  newPostText: string
  posts: Array<PostType>
}
export type DialogPageType = {
  dialogs: Array<DialogType>
  newMessageText: string
  messages: Array<MessageType>
}
export type sideBarType = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: sideBarType
}
export type StoreType = {
  _state: RootStateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
  ReturnType<typeof createPostAC>
  | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof changeMessageAC>


export const store: StoreType = {
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        {id: v1(), message: 'Nu privet', likesCount: 15},
        {id: v1(), message: 'Kak dela s Reactom?', likesCount: 20},
        {
          id: v1(),
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.',
          likesCount: 155
        },
        {id: v1(), message: 'Message from the past', likesCount: 255},
        {id: v1(), message: 'Message from the past', likesCount: 255},
        {id: v1(), message: 'Message from the past', likesCount: 255}
      ]
    },
    dialogsPage: {
      dialogs: [
        {id: v1(), name: 'Anton'},
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Natasha'},
        {id: v1(), name: 'Artem'}
      ],
      newMessageText: '',
      messages: [
        {id: v1(), message: 'Privet'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Kak dela?'},
        {id: v1(), message: 'Norm, uchu React'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Mama ya v teleke!)))'}
      ]
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber()

  }
}

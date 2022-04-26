import {v1} from 'uuid'

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
export type sideBar = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: sideBar
}
export type StoreType = {
  _state: RootStateType
  changePostText: (newPostMessage: string) => void
  createPost: () => void
  changeMessageText: (newMessageText: string) => void
  addNewMessage: () => void
  _rerenderEntireTree: () => void
  subscribe: (observer: () => void) => void
  getState: () => RootStateType
}

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
  changePostText(newPostMessage: string) {
    this._state.profilePage.newPostText = newPostMessage
    this._rerenderEntireTree()
  },
  createPost() {
    const newPost: PostType = {
      id: v1(),
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.unshift(newPost)
    this._state.profilePage.newPostText = ''
    this._rerenderEntireTree()
  },
  changeMessageText(newMessageText: string) {
    this._state.dialogsPage.newMessageText = newMessageText
    this._rerenderEntireTree()
  },
  addNewMessage() {
    const newMessage: MessageType = {
      id: v1(),
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._rerenderEntireTree()
  },
  _rerenderEntireTree() {
    console.log('state changed')
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  getState() {
    return this._state
  }
}
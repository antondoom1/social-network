import {ActionsTypes, DialogPageType, MessageType} from './state'
import {v1} from 'uuid'

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
  switch (action.type) {
    case 'ADD-NEW-MESSAGE':
      const newMessage: MessageType = {
        id: v1(),
        message: state.newMessageText
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case 'CHANGE-MESSAGE-TEXT':
      state.newMessageText = action.newMessageText
      return state
    default:
      return state
  }
}

export const addMessageAC = (newMessageText: string) => {
  return {
    type: 'ADD-NEW-MESSAGE',
    newMessage: newMessageText
  } as const
}
export const changeMessageAC = (newMessageText: string) => {
  return {
    type: 'CHANGE-MESSAGE-TEXT',
    newMessageText: newMessageText
  } as const
}
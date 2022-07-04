import {v1} from 'uuid'
import {DialogType, MessageType} from '../types/entities'

export type InitialStateType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

let initialState: InitialStateType = {
  dialogs: [
    {id: v1(), name: 'Anton'},
    {id: v1(), name: 'Dasha'},
    {id: v1(), name: 'Dima'},
    {id: v1(), name: 'Igor'},
    {id: v1(), name: 'Natasha'},
    {id: v1(), name: 'Artem'}
  ],
  messages: [
    {id: v1(), message: 'Privet'},
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'Kak dela?'},
    {id: v1(), message: 'Norm, uchu React'},
    {id: v1(), message: 'Yo'},
    {id: v1(), message: 'Mama ya v teleke!)))'}
  ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsReducerACType): InitialStateType => {
  switch (action.type) {
    case 'ADD-NEW-MESSAGE':
      const newMessage: MessageType = {
        id: v1(),
        message: action.newMessageBody
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    default:
      return state
  }
}

export type DialogsReducerACType = ReturnType<typeof addMessageAC>

export const addMessageAC = (newMessageBody: string) => {
  return {
    type: 'ADD-NEW-MESSAGE',
    newMessageBody
  } as const
}
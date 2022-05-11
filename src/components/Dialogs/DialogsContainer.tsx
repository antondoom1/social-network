import React from 'react'
import {addMessageAC, changeMessageAC} from '../../redux/dialogs-reducer'
import {RootStoreType} from '../../redux/redux-store'
import {Dialogs} from './Dialogs'

type DialogsType = {
  store: RootStoreType
}

export const DialogsContainer: React.FC<DialogsType> = (props) => {
  let state = props.store.getState().dialogsPage

  const sendMessage = () => props.store.dispatch(addMessageAC(state.newMessageText))

  const changeMessageText = (text: string) => {
    props.store.dispatch(changeMessageAC(text))
  }

  return (
    <Dialogs changeMessageText={changeMessageText}
             sendMessage={sendMessage}
             dialogsData={state.dialogs}
             messagesData={state.messages}
             newMessageText={state.newMessageText}/>
  )
}

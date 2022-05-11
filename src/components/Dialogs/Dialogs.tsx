import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Edit3} from 'react-feather'
import {DialogType, MessageType} from '../../types/entities'

type DialogsType = {
  changeMessageText: (text: string) => void
  sendMessage: () => void
  messagesData: Array<MessageType>
  dialogsData: Array<DialogType>
  newMessageText: string
}

export const Dialogs: React.FC<DialogsType> = ({changeMessageText, sendMessage, messagesData, dialogsData, newMessageText}) => {

  const sendMessageHandler = () => sendMessage()

  const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeMessageText(e.currentTarget.value)
  }

  const mappedDialogs = dialogsData.map(d => {
    return (
      <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
  })
  const mappedMessages = messagesData.map(m => {
    return (
      <Message key={m.id} message={m.message} id={m.id}/>
    )
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {mappedDialogs}
      </div>
      <div className={s.messages}>
        {mappedMessages}
      </div>
      <div>
        <textarea
          value={newMessageText}
          onChange={changeMessageTextHandler}/>
        <button onClick={sendMessageHandler}>
          <i><Edit3 className={s.editIco} size={16}/></i>
          Send message
        </button>
      </div>
    </div>
  )
}

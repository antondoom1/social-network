import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {ActionsTypes, DialogType, MessageType} from '../../redux/state'
import {Edit3} from 'react-feather'
import {addMessageAC, changeMessageAC} from '../../redux/dialogs-reducer'

type DialogsType = {
  newMessageText: string
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsType> = ({newMessageText, dialogsData, messagesData, dispatch}) => {

  const sendMessageHandler = () => dispatch(addMessageAC(newMessageText))

  const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeMessageAC(e.currentTarget.value))
  }

  const mappedDialogs = dialogsData.map((d: DialogType) => {
    return (
      <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
  })
  const mappedMessages = messagesData.map((m: MessageType) => {
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

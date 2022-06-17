import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Edit3} from 'react-feather'
import {DialogsPropsType} from './DialogsContainer'
import {Redirect} from 'react-router-dom'

export const Dialogs: React.FC<DialogsPropsType> = ({changeMessageText, sendMessage, dialogsPage, isAuth}) => {

  const sendMessageHandler = () => sendMessage()

  const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeMessageText(e.currentTarget.value)
  }

  const mappedDialogs = dialogsPage.dialogs.map(d => {
    return (
      <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
  })
  const mappedMessages = dialogsPage.messages.map(m => {
    return (
      <Message key={m.id} message={m.message} id={m.id}/>
    )
  })

  if (!isAuth) return <Redirect to={'/login'}/>

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
          value={dialogsPage.newMessageText}
          onChange={changeMessageTextHandler}/>
        <button onClick={sendMessageHandler}>
          <i><Edit3 className={s.editIco} size={16}/></i>
          Send message
        </button>
      </div>
    </div>
  )
}

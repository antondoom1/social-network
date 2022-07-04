import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Edit3} from 'react-feather'
import {DialogsPropsType} from './DialogsContainer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../utils/validators/validators'

export const Dialogs: React.FC<DialogsPropsType> = ({sendMessage, dialogsPage}) => {

  const addNewMessage = (values: FormDataType) => {
    sendMessage(values.newMessageBody)
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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {mappedDialogs}
      </div>
      <div className={s.messages}>
        {mappedMessages}
      </div>
      <div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

type FormDataType = {
  newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={'textarea'}
        name={'newMessageBody'}
        placeholder={'Enter your message'}
        validate={[required, maxLength50]}/>
      <button>
        <i><Edit3 className={s.editIco} size={16}/></i>
        Send message
      </button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
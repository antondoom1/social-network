import React from 'react'
import s from './../Dialogs.module.css'
import {MessageType} from '../../../types/entities'

export const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}


import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogType} from '../../../types/entities'

export const DialogItem = (props: DialogType) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

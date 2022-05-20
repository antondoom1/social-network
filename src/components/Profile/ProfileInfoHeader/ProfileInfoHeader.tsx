import React from 'react'
import s from './ProfileInfoHeader.module.css'
import {Paper} from '@material-ui/core'

export const ProfileInfoHeader = () => {
  return (
    <Paper elevation={2} className={s.containerProfileInfo}>
      <div className={s.bodyProfileInfo}>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/03/13/53/banner-1711718_960_720.jpg"
          alt="profileHeaderBg"/>
      </div>
      <div className={s.descriptionBlock}>
        <figure>
          <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="ava"/>
        </figure>
        <h4>
          Anton Yakavenka
          <span>doomanton@gmail.com</span>
        </h4>
      </div>
    </Paper>
  )
}



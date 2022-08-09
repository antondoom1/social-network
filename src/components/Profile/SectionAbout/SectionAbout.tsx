import React, {useState} from 'react'
import s from './SectionAbout.module.css'
import {Lock, Eye, MapPin, Users} from 'react-feather'
import {Divider, IconButton, Paper} from '@material-ui/core'
import {ProfileType} from '../../../types/entities'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

type SectionAboutType = {
  profile: ProfileType
  isOwner: boolean
}

export const SectionAbout: React.FC<SectionAboutType> = ({profile, isOwner}) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <Paper elevation={2} className={s.sectionAboutWrapper}>
      <div className={s.aboutBlock}>
        {!editMode
          ? <>
            <h4>
              About
              {isOwner && <IconButton className={s.iconBtn} onClick={() => setEditMode(true)}>
                <EditIcon className={s.ico}/>
              </IconButton>}
            </h4>
            <p>{profile.aboutMe}</p>
          </>
          : <>
            <h4>
              About
              <IconButton className={s.iconBtn} onClick={() => setEditMode(false)}>
                <SaveIcon className={s.ico}/>
              </IconButton>
            </h4>
            <textarea></textarea>
          </>
        }
      </div>
      <Divider variant={'middle'}/>
      <div className={s.cardBody}>
        <i><Lock/></i>
        <h4>
          Private
          <span>What's up, how are you?</span>
        </h4>
      </div>
      <div className={s.cardBody}>
        <i><Eye/></i>
        <h4>
          Visible
          <span>Anyone can find you</span>
        </h4>
      </div>
      <div className={s.cardBody}>
        <i><MapPin/></i>
        <h4>Minsk, Belarus </h4>
      </div>
      <div className={s.cardBody}>
        <i><Users/></i>
        <h4>IT-Incubator</h4></div>
    </Paper>
  )
}

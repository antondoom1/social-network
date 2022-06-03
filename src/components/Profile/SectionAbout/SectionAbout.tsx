import React from 'react'
import s from './SectionAbout.module.css'
import {Lock, Eye, MapPin, Users} from 'react-feather'
import {Divider, Paper} from '@material-ui/core'
import {MapStateToPropsType} from '../ProfileAPIComponent'

export const SectionAbout: React.FC<MapStateToPropsType> = ({profile}) => {
  return (
    <Paper elevation={2} className={s.sectionAboutWrapper}>
      <div className={s.aboutBlock}>
        <h4>About</h4>
        <p>{profile.aboutMe}</p>
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

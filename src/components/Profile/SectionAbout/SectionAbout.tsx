import React from 'react'
import s from './SectionAbout.module.css'
import {Lock, Eye, MapPin, Users} from 'react-feather'

export const SectionAbout = () => {
  return (
    <div className={s.sectionAboutWrapper}>
      <div className={s.aboutBlock}>
        <h4>About</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat
          non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
      </div>
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
    </div>
  )
}


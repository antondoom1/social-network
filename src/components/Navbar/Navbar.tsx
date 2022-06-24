import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {Globe, MessageCircle, Music, Settings, User, Users} from 'react-feather'
import NavbarHeaderContainer from './NavbarHeaderContainer'

export const Navbar = () => {
  return (
    <div>
      <div className={s.containerNav}>

        <NavbarHeaderContainer/>

        <nav className={s.nav}>
          <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>
              <User className={s.navbarIco}/>
              Profile
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>
              <Users className={s.navbarIco}/>
              Users
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>
              <MessageCircle className={s.navbarIco}/>
              Messages
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>
              <Globe className={s.navbarIco}/>
              News
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>
              <Music className={s.navbarIco}/>
              Music
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>
              <Settings className={s.navbarIco}/>
              Settings
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}


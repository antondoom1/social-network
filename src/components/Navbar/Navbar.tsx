import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {User, MessageCircle, Globe, Music, Settings} from 'react-feather'
import logo from './logo.png'

export const Navbar = () => {
  return (
    <div>
      <div className={s.containerNav}>
        <div className={s.navHeader}>
          <NavLink to="/index.html">
            <img src={logo} alt="logo"/>
          </NavLink>
        </div>
        <nav className={s.nav}>
          <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>
              <User className={s.navbarIco}/>
              Profile
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
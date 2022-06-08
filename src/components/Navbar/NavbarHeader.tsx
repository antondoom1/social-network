import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import logo from './logo.png'
import React from 'react'
import {MapStateToPropsType} from './NavbarHeaderContainer'

export const NavbarHeader: React.FC<MapStateToPropsType> = ({isAuth, login}) => {

  return (
    <div className={s.navHeader}>
      <NavLink to="/profile/23999">
        <img src={logo} alt="logo"/>
      </NavLink>
      <NavLink to={'/profile/23999'}>
        {
          isAuth
            ? <div>{login}</div>
            : <div>login</div>
        }
      </NavLink>
    </div>
  )
}
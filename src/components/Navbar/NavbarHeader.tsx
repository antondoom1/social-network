import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import logo from './logo.png'
import React from 'react'

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const NavbarHeader: React.FC<PropsType> = ({isAuth, login, logout}) => {

  return (
    <div className={s.navHeader}>
      <NavLink to="/profile/23999">
        <img src={logo} alt="logo"/>
      </NavLink>
      <NavLink to={'/profile/23999'}>
        {
          isAuth
            ? <div>
              {login}
              <button onClick={logout}>logout</button>
            </div>
            : <div>
              <span>Login into</span>
              <span>your account</span>
            </div>
        }
      </NavLink>
    </div>
  )
}
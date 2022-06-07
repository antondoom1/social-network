import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {NavbarHeader} from './NavbarHeader'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'

export type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  setAuthUserData: (userId: number, login: string, email: string) => void
}

type NavbarHeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class NavbarHeaderContainerAPI extends React.Component<NavbarHeaderPropsType, AppStateType> {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          this.props.setAuthUserData(id, login, email)
        }
      })
  }

  render() {
    return <NavbarHeader {...this.props}/>
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export const NavbarHeaderContainer = connect(mapStateToProps, {setAuthUserData})(NavbarHeaderContainerAPI)
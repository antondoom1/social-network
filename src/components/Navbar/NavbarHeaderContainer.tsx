import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {NavbarHeader} from './NavbarHeader'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'
import {authAPI} from '../../api/api'

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
    authAPI.auth()
      .then((data) => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
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
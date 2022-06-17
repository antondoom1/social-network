import React from 'react'
import {AppStateType} from '../../redux/redux-store'
import {NavbarHeader} from './NavbarHeader'
import {connect} from 'react-redux'
import {getAuthUserData} from '../../redux/auth-reducer'

export type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  getAuthUserData: () => void
}

type NavbarHeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class NavbarHeaderContainerAPI extends React.Component<NavbarHeaderPropsType, AppStateType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <NavbarHeader {...this.props}/>
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export const NavbarHeaderContainer = connect(mapStateToProps, {getAuthUserData})(NavbarHeaderContainerAPI)
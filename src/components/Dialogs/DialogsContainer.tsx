import React from 'react'
import {addMessageAC, InitialStateType} from '../../redux/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch, compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

type MapStateToPropsType = {
  dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: (newMessageBody: string) => dispatch(addMessageAC(newMessageBody))
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
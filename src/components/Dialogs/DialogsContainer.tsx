import React from 'react'
import {addMessageAC, changeMessageAC, InitialStateType} from '../../redux/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch, compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

type MapStateToPropsType = {
  dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
  changeMessageText: (text: string) => void
  sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    changeMessageText: (text: string) => dispatch(changeMessageAC(text)),
    sendMessage: () => dispatch(addMessageAC())
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
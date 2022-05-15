import {addMessageAC, changeMessageAC, InitialStateType} from '../../redux/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch} from 'redux'

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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

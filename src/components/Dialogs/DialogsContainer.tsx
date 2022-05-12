import React from 'react'
import {addMessageAC, changeMessageAC} from '../../redux/dialogs-reducer'
import {StoreContext} from '../../StoreContext'
import {Dialogs} from './Dialogs'

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState().dialogsPage
          const sendMessage = () => store.dispatch(addMessageAC())
          const changeMessageText = (text: string) => store.dispatch(changeMessageAC(text))

          return (
            <Dialogs changeMessageText={changeMessageText}
                     sendMessage={sendMessage}
                     dialogsPage={state}/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

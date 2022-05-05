import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {StoreType} from './redux/state'
import {Route} from 'react-router-dom'
// import {Header} from './components/Header/Header'


type AppType = {
  store: StoreType
}

const App: React.FC<AppType> = ({store}) => {
  const state = store.getState()

  return (
    <div className={'app-wrapper'}>
      {/*<Header/>*/}
      <Navbar/>
      <div className={'app-wrapper-content'}>
        <Route path={'/profile'}
               render={() => <Profile
                 profilePage={state.profilePage}
                 dispatch={store.dispatch.bind(store)}/>}/>
        <Route path={'/dialogs'}
               render={() => <Dialogs
                 dialogsData={state.dialogsPage.dialogs}
                 messagesData={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 dispatch={store.dispatch.bind(store)}/>}/>
        <Route path={'/news'}
               render={() => <News/>}/>
        <Route path={'/music'}
               render={() => <Music/>}/>
        <Route path={'/settings'}
               render={() => <Settings/>}/>
      </div>
    </div>
  )
}

export default App

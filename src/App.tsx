import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {Route} from 'react-router-dom'
import {RootStoreType} from './redux/redux-store'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'

type AppType = {
  store: RootStoreType
}

const App: React.FC<AppType> = ({store}) => {

  return (
    <div className={'app-wrapper'}>
      <Navbar/>
      <div className={'app-wrapper-content'}>
        <Route path={'/profile'}
               render={() => <Profile store={store}/>}/>
        <Route path={'/dialogs'}
               render={() => <DialogsContainer store={store}/>}/>
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

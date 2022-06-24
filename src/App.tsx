import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {Route} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import {Grid} from '@material-ui/core'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = () => {

  return (
    <div className={'app-wrapper'}>
      <Grid
        container
        justifyContent={'center'}
        direction="row">

        <Navbar/>

        <Grid item xs={7}>
          <div className={'app-wrapper-content'}>
            <Route path={'/profile/:userId?'}
                   render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'}
                   render={() => <DialogsContainer/>}/>
            <Route path={'/news'}
                   render={() => <News/>}/>
            <Route path={'/music'}
                   render={() => <Music/>}/>
            <Route path={'/settings'}
                   render={() => <Settings/>}/>
            <Route path={'/users'}
                   render={() => <UsersContainer/>}/>
            <Route path={'/login'}
                   render={() => <LoginPage/>}/>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default App

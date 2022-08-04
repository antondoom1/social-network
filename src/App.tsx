import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {Route, withRouter} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import {Grid} from '@material-ui/core'
import UsersContainer from './components/Users/UsersContainer'
import {connect} from 'react-redux'
import {AppStateType} from './redux/redux-store'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import {Preloader} from './components/common/Preloader/Preloader'

type MapStateToPropsType = {
  initialized: boolean
}

type MapDispatchToPropsType = {
  initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component<AppPropsType, AppStateType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

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
                     render={() => {
                       return <React.Suspense fallback={<Preloader/>}>
                         <ProfileContainer/>
                       </React.Suspense>
                     }}/>
              <Route path={'/dialogs'}
                     render={() => {
                       return <React.Suspense fallback={<Preloader/>}>
                         <DialogsContainer/>
                       </React.Suspense>
                     }}/>
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
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App)

import React from 'react'
import {
  Avatar, Box, Button, Checkbox,
  Container,
  CssBaseline,
  FormControlLabel, Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {AppStateType} from '../../redux/redux-store'
import s from '../common/FormsControls/FormsControls.module.css'

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  isAuth: boolean
}

export const LoginPage: React.FC<MapDispatchToPropsType> = (props) => {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget)
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password')
  //   })
  // }

  const handleSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'profile'}/>
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar style={{margin: '8px', backgroundColor: '#9B27AF'}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <LoginReduxForm onSubmit={handleSubmit}/>

      </Box>
    </Container>
  )
}

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}


const Login: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <Box component="form" onSubmit={props.handleSubmit} sx={{mt: 1}}>

      {/* find out why it doesn't work */}

      {/*<Field*/}
      {/*  name={'email'}*/}
      {/*  component={() =>*/}
      {/*    <TextField*/}
      {/*      variant="outlined"*/}
      {/*      margin="normal"*/}
      {/*      required*/}
      {/*      fullWidth*/}
      {/*      id="email"*/}
      {/*      label="Email Address"*/}
      {/*      name="email"*/}
      {/*      autoComplete="email"*/}
      {/*      autoFocus*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}

      {/*      <Field*/}
      {/*  name={'password'}*/}
      {/*  component={() =>*/}
      {/*    <TextField*/}
      {/*      variant="outlined"*/}
      {/*      margin="normal"*/}
      {/*      required*/}
      {/*      fullWidth*/}
      {/*      name="password"*/}
      {/*      label="Password"*/}
      {/*      type="password"*/}
      {/*      id="password"*/}
      {/*      autoComplete="current-password"*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}

      {/*<FormControlLabel*/}
      {/*  control={<Checkbox value="remember" color="primary"/>}*/}
      {/*  label="Remember me"*/}
      {/*/>*/}

      <Field placeholder={'Email'} name={'email'} component={'input'}/>
      <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
      <br/>
      <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me

      {
        props.error &&
        <div className={s.formSummaryError}>
          {props.error}
        </div>
      }

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{marginTop: '24px', marginBottom: '16px'}}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {'Don\'t have an account? Sign Up'}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(Login)

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(LoginPage)
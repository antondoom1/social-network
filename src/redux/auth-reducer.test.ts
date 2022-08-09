import {authReducer, InitialStateType, setAuthUserData} from './auth-reducer'

test('the user data should get correct values', () => {
  const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
  }

  const userDataState: InitialStateType = authReducer(initialState, setAuthUserData(22, 'testLogin', 'testemail@gmail.com', true))

  expect(userDataState.id).toBe(22)
  expect(userDataState.login).toBe('testLogin')
  expect(userDataState.email).toBe('testemail@gmail.com')
  expect(userDataState.isAuth).toBe(true)

})
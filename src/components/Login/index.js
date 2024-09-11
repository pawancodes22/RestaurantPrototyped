import {useState, useEffect} from 'react'

import {Redirect, useHistory} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  MainContainer,
  LoginBox,
  ErrorMsg,
  InputBox,
  LoginButton,
  LoginForm,
  MainHeading,
  SubHeading,
} from './styledComponents'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({errorMsg: '', isError: false})
  const history = useHistory()

  const submitLoginForm = async event => {
    event.preventDefault()
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const jsonResponse = await response.json()
    if (response.ok) {
      console.log(jsonResponse)
      Cookies.set('jwt_token', jsonResponse.jwt_token, {expires: 2})
      history.replace('/')
    } else {
      setError({errorMsg: jsonResponse.error_msg, isError: true})
    }
  }

  useEffect(() => {
    console.log(error)
  })

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <MainContainer>
      <MainHeading>foodie.</MainHeading>
      <SubHeading>Destination for all your food cravings</SubHeading>
      <LoginBox>
        <LoginForm onSubmit={submitLoginForm}>
          <InputBox
            id="username"
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <InputBox
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          {error.isError && <ErrorMsg>{`*${error.errorMsg}`}</ErrorMsg>}
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginBox>
    </MainContainer>
  )
}
export default Login

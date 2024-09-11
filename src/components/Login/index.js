import {
  MainContainer,
  LoginBox,
  LoginLabel,
  InputBox,
  LoginButton,
  LoginForm,
} from './styledComponents'

const Login = () => (
  <MainContainer>
    <LoginBox>
      <LoginForm>
        <LoginLabel htmlFor="username">Username</LoginLabel>
        <InputBox id="username" placeholder="Enter your username" />
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <InputBox id="password" placeholder="Enter your password" />
        <LoginButton>Login</LoginButton>
      </LoginForm>
    </LoginBox>
  </MainContainer>
)
export default Login

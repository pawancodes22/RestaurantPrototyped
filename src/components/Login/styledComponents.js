import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-image: url('https://img-cdn.pixlr.com/image-generator/history/66e15f1b6823c97b9b0c9889/eb8dc3ac-0c1d-4b55-ae05-9780101e7b4f/preview.webp');
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const MainHeading = styled.h1`
  color: white;
  font-family: 'Bree Serif';
  font-weight: bold;
  font-size: 60px;
  margin: 15px;
`

export const SubHeading = styled.p`
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
`

export const LoginBox = styled.div`
  background-color: transparent;
`

export const InputBox = styled.input`
  padding: 8px;
  border-style: none;
  border-bottom: 1px solid grey;
  border-radius: 2px;
  width: 230px;
  height: 35px;
  outline: none;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const LoginButton = styled.button`
  background-color: #3b71ca;
  color: white;
  border-style: none;
  padding: 6px;
  margin-top: 10px;
  text-align: center;
  height: 35px;
`

export const ErrorMsg = styled.p`
  color: orange;
  margin: 0px;
  padding: 0px;
`

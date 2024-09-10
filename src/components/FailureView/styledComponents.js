import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 40%;
`

export const RetryButton = styled.button`
  color: white;
  background-color: blue;
  padding: 10px 15px;
  border-radius: 8px;
  border-style: none;
`

export const FailureMessage = styled.p`
  padding: 0px;
  margin: 10px 0px;
  font-family: 'Roboto';
  font-weight: 600;
`

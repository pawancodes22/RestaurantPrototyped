import {FaShoppingCart} from 'react-icons/fa'

import styled from 'styled-components'

export const CartIcon = styled(FaShoppingCart)`
  font-size: 30px;
`

export const ContainerDiv = styled.div`
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`

export const MediumDeviceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12%;
`

export const Heading = styled.h1`
  font-weight: bold;
  margin: 0px;
  font-size: 20px;
`

export const SubHeading = styled(Heading)`
  font-weight: normal;
  font-size: 17px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const CartContainer = styled.div`
  display: flex;
`

export const SpanElement = styled.span`
  background-color: orange;
  color: white;
  width: 20px;
  height: 20px;
  font-size: 15px;
  border-radius: 50%;
  text-align: center;
`
export const HorizontalLine = styled.hr`
  margin: 0px;
`

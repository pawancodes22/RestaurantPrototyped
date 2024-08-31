import RestaurantContext from '../../context/RestaurantContext'

import {
  ContainerDiv,
  Heading,
  CartContainer,
  SpanElement,
  CartIcon,
  HorizontalLine,
  SubHeading,
  MediumDeviceDiv,
} from './styledComponents'

const Header = () => (
  <RestaurantContext.Consumer>
    {value => {
      const {dishesCount} = value
      return (
        <>
          <ContainerDiv>
            <Heading>UNI Resto Cafe</Heading>
            <MediumDeviceDiv>
              <SubHeading>My Orders</SubHeading>
              <CartContainer>
                <CartIcon />
                <SpanElement>{Object.keys(dishesCount).length}</SpanElement>
              </CartContainer>
            </MediumDeviceDiv>
          </ContainerDiv>
          <HorizontalLine />
        </>
      )
    }}
  </RestaurantContext.Consumer>
)

export default Header

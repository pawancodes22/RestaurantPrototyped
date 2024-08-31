import RestaurantContext from '../../context/RestaurantContext'

import {
  MainContainer,
  FoodImage,
  NonVegTypeImage,
  VegTypeImage,
  FoodContentContainer,
  FoodHeading,
  FoodPrice,
  FoodDescription,
  AddItemsContainer,
  AddItemListItem,
  AlterButton,
  CustomizationsText,
  SmallCaloriesText,
  MediumCaloriesText,
} from './styledComponents'

const FoodItem = props => (
  <RestaurantContext.Consumer>
    {value => {
      const {dishesCount, addDishesCount, removeDishesCount} = value
      const {item} = props
      const {
        dishCalories,
        dishCurrency,
        dishDescription,
        dishId,
        dishImage,
        dishName,
        dishPrice,
        dishType,
        addonCat,
      } = item
      return (
        <MainContainer>
          {dishType === 2 && (
            <VegTypeImage src="https://www.shutterstock.com/shutterstock/photos/2190482501/display_1500/stock-photo-pure-veg-icon-logo-symbol-2190482501.jpg" />
          )}
          {dishType === 1 && (
            <NonVegTypeImage src="https://qph.cf2.quoracdn.net/main-qimg-63ca3fefb57ae52e1c1253bc14deddcd" />
          )}
          <FoodContentContainer>
            <FoodHeading>{dishName}</FoodHeading>
            <FoodPrice>
              {dishCurrency} {dishPrice}
            </FoodPrice>
            <FoodDescription>{dishDescription}</FoodDescription>
            <AddItemsContainer>
              <AddItemListItem>
                <AlterButton onClick={() => removeDishesCount(dishId)}>
                  -
                </AlterButton>
              </AddItemListItem>
              <AddItemListItem>
                <AlterButton>
                  {dishId in dishesCount ? dishesCount[dishId] : 0}
                </AlterButton>
              </AddItemListItem>
              <AddItemListItem onClick={() => addDishesCount(dishId)}>
                <AlterButton>+</AlterButton>
              </AddItemListItem>
            </AddItemsContainer>
            {addonCat.length !== 0 && (
              <CustomizationsText>Customizations available</CustomizationsText>
            )}
          </FoodContentContainer>
          <SmallCaloriesText>
            {dishCalories}
            <br />
            calories
          </SmallCaloriesText>
          <MediumCaloriesText>{dishCalories} calories</MediumCaloriesText>
          <FoodImage src={dishImage} alt="menu category image" />
        </MainContainer>
      )
    }}
  </RestaurantContext.Consumer>
)

export default FoodItem

import FoodItem from '../FoodItem'

import RestaurantContext from '../../context/RestaurantContext'

import {MainContainer} from './styledComponents'

const FoodItems = props => {
  const {data} = props
  return (
    <RestaurantContext.Consumer>
      {value => {
        const {activeTabId} = value
        const currentList = data.find(
          item => item.menuCategoryId === activeTabId,
        )
        const mainList =
          currentList !== undefined ? currentList.categoryDishes : []
        return (
          <MainContainer>
            {mainList.map(item => (
              <FoodItem key={item.dishId} item={item} />
            ))}
          </MainContainer>
        )
      }}
    </RestaurantContext.Consumer>
  )
}
export default FoodItems

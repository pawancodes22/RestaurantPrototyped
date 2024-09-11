import React from 'react'

const RestaurantContext = React.createContext({
  activeTabId: '',
  changeActiveTabId: () => {},
  dishesCount: [],
  addDishesCount: () => {},
  subtractDishesCount: () => {},
})

export default RestaurantContext

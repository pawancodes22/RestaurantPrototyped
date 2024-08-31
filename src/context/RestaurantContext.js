import React from 'react'

const RestaurantContext = React.createContext({
  activeTabId: '',
  changeActiveTabId: () => {},
  data: [],
  dishesCount: [],
  addDishesCount: () => {},
  subtractDishesCount: () => {},
})

export default RestaurantContext

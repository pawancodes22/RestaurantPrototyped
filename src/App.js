import {useState, useEffect} from 'react'
import FoodItems from './components/FoodItems'
import RestaurantContext from './context/RestaurantContext'
import Header from './components/Header'
import Tabs from './components/Tabs'
import FailureView from './components/FailureView'
import LoaderView from './components/LoaderView'
import './App.css'

const App = () => {
  const apiConstants = {
    pending: 'PENDING',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }
  const [data, setData] = useState([])
  const [activeTabId, setTabId] = useState('')
  const [dishesCount, setDishesCount] = useState({})
  const [apiStatus, setApiStatus] = useState(apiConstants.pending)

  const addDishesCount = dishId =>
    setDishesCount(prev => {
      const newObj = {...prev}
      if (prev[dishId] === undefined) {
        newObj[dishId] = 1
        return newObj
      }
      newObj[dishId] += 1
      return newObj
    })

  const removeDishesCount = dishId =>
    setDishesCount(prev => {
      const newObj = {...prev}
      if (prev[dishId] === undefined) {
        return prev
      }
      if (newObj[dishId] - 1 > 0) {
        newObj[dishId] -= 1
      } else {
        delete newObj[dishId]
      }
      return newObj
    })

  const changeActiveTabId = tabId => setTabId(tabId)

  const fetchApi = async () => {
    setApiStatus(apiConstants.pending)
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const response = await fetch(url)
    if (response.ok) {
      const jsonResponse = await response.json()
      const rearrangedResponse = jsonResponse[0].table_menu_list.map(item => ({
        categoryDishes: item.category_dishes.map(value => ({
          dishAvailability: value.dish_Availability,
          dishType: value.dish_Type,
          dishCalories: value.dish_calories,
          dishCurrency: value.dish_currency,
          dishDescription: value.dish_description,
          dishId: value.dish_id,
          dishImage: value.dish_image,
          dishName: value.dish_name,
          dishPrice: value.dish_price,
          nexturl: value.nexturl,
          addonCat:
            value.addonCat.length === 0
              ? []
              : value.addonCat.map(subValue => ({
                  addonCategory: subValue.addon_category,
                  addonCategoryId: subValue.addon_category_id,
                  addonSelection: subValue.addon_selection,
                  nexturl: subValue.nexturl,
                  addons: subValue.addons.map(smallSubValue => ({
                    dishAvailability: value.dish_Availability,
                    dishType: smallSubValue.dish_Type,
                    dishCalories: smallSubValue.dish_calories,
                    dishCurrency: smallSubValue.dish_currency,
                    dishDescription: smallSubValue.dish_description,
                    dishId: smallSubValue.dish_id,
                    dishImage: smallSubValue.dish_image,
                    dishName: smallSubValue.dish_name,
                    dishPrice: smallSubValue.dish_price,
                  })),
                })),
        })),
        menuCategory: item.menu_category,
        menuCategoryId: item.menu_category_id,
        menuCategoryImage: item.menu_category_image,
        nexturl: item.nexturl,
      }))
      setData(rearrangedResponse)
      setTabId(rearrangedResponse[0].menuCategoryId)
      setApiStatus(apiConstants.success)
    } else {
      setApiStatus(apiConstants.failure)
    }
  }

  useEffect(() => {
    fetchApi()
    // eslint-disable-next-line
  }, [])

  const DataView = () => (
    <>
      <Tabs data={data} activeTabId={activeTabId} />
      <FoodItems />
    </>
  )

  const Output = () => {
    switch (apiStatus) {
      case apiConstants.pending:
        return <LoaderView />
      case apiConstants.success:
        return DataView()
      case apiConstants.failure:
        return <FailureView fetchApi={fetchApi} />
      default:
        return null
    }
  }

  return (
    <RestaurantContext.Provider
      value={{
        activeTabId,
        changeActiveTabId,
        data,
        dishesCount,
        addDishesCount,
        removeDishesCount,
      }}
    >
      <Header />
      {Output()}
    </RestaurantContext.Provider>
  )
}
export default App

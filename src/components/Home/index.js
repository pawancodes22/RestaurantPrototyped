import {useState, useEffect, useContext} from 'react'
import RestaurantContext from '../../context/RestaurantContext'
import Header from '../Header'
import Tabs from '../Tabs'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import FoodItems from '../FoodItems'

const Home = () => {
  const apiConstants = {
    pending: 'PENDING',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }
  const [data, setData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiConstants.pending)
  const {changeActiveTabId} = useContext(RestaurantContext)
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
      changeActiveTabId(rearrangedResponse[0].menuCategoryId)
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
    <RestaurantContext.Consumer>
      {value => {
        const {activeTabId} = value
        return (
          <>
            <Tabs data={data} activeTabId={activeTabId} />
            <FoodItems data={data} />
          </>
        )
      }}
    </RestaurantContext.Consumer>
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
    <>
      <Header />
      {Output()}
    </>
  )
}
export default Home

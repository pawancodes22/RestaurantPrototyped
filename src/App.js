import {useState} from 'react'
import RestaurantContext from './context/RestaurantContext'
import Home from './components/Home'
import Login from './components/Login'
import './App.css'

const App = () => {
  const [activeTabId, setTabId] = useState('')
  const [dishesCount, setDishesCount] = useState({})

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

  return (
    <RestaurantContext.Provider
      value={{
        activeTabId,
        changeActiveTabId,
        dishesCount,
        addDishesCount,
        removeDishesCount,
      }}
    >
      <Home />
    </RestaurantContext.Provider>
  )
}
export default App

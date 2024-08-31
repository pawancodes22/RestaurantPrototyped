import RestaurantContext from '../../context/RestaurantContext'

import {MainContainer, LiItem, Button, HorizontalLine} from './styledComponents'

const Tabs = props => {
  const {data} = props
  return (
    <RestaurantContext.Consumer>
      {value => {
        const {activeTabId, changeActiveTabId} = value
        return (
          <>
            <MainContainer>
              {data.map(item => {
                const sendTabId = () => {
                  changeActiveTabId(item.menuCategoryId)
                }
                return (
                  <LiItem key={item.menuCategoryId}>
                    <Button
                      onClick={sendTabId}
                      currentTabId={item.menuCategoryId}
                      activeTabId={activeTabId}
                    >
                      {item.menuCategory}
                    </Button>
                  </LiItem>
                )
              })}
            </MainContainer>
            <HorizontalLine />
          </>
        )
      }}
    </RestaurantContext.Consumer>
  )
}

export default Tabs

import styled from 'styled-components'

export const MainContainer = styled.li`
  list-style-type: none;
  font-family: 'Roboto';
  border: 2px solid grey;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  margin-bottom: 15px;
`

export const NonVegTypeImage = styled.img`
  height: 30px;
  width: 30px;
  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`

export const VegTypeImage = styled.img`
  height: 28px;
  width: 28px;
  @media (min-width: 768px) {
    height: 48px;
    width: 48px;
  }
`

export const FoodImage = styled.img`
  height: 80px;
  width: 80px;
  @media (min-width: 768px) {
    height: 130px;
    width: 130px;
  }
`

export const FoodContentContainer = styled.div`
  margin: 0px 10px;
  flex-grow: 1;
  @media (min-width: 768px) {
    flex-grow: 0;
    width: 60%;
    margin: 0px 20px;
  }
`

export const FoodHeading = styled.h1`
  font-size: 15px;
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  margin-bottom: 7px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const FoodPrice = styled.p`
  color: #2b2929;
  font-size: 13px;
  margin: 0px;
  margin-top: 3px;
  font-weight: 500;
  margin-bottom: 7px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const FoodDescription = styled(FoodPrice)`
  color: #706f6f;
  font-weight: 300;
  margin-bottom: 8px;
`

export const AddItemsContainer = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f5c0f;
  border-radius: 15px;
  width: 100px;
  @media (min-width: 768px) {
    width: 130px;
  }
`

export const AddItemListItem = styled.li`
  list-style-type: none;
`

export const AlterButton = styled.button`
  background-color: transparent;
  border-style: none;
  color: white;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const SmallCaloriesText = styled.p`
  color: #949e06;
  align-self: center;
  font-size: 13px;
  margin-right: 4px;
  @media (min-width: 768px) {
    display: none;
    font-size: 18px;
  }
`

export const MediumCaloriesText = styled(SmallCaloriesText)`
  @media (min-width: 768px) {
    flex-grow: 1;
    display: inline;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

export const CustomizationsText = styled.p`
  color: violet;
  font-size: 13px;
  margin: 0px;
  margin-top: 6px;
  padding: 0px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

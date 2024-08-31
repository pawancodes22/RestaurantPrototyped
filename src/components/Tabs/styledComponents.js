import styled from 'styled-components'

export const MainContainer = styled.ul`
  font-family: 'Roboto';
  margin: 0px;
  display: flex;
  padding-left: 0px;
  overflow-x: auto;
`

export const LiItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  font-weight: 600;
  border-style: none;
  background-color: none;
  display: inline;
  white-space: nowrap;
  background-color: transparent;
  padding: 15px;
  margin: 2px;
  color: ${props =>
    props.currentTabId === props.activeTabId ? '#fc4503' : ''};
  border-bottom: ${props =>
    props.currentTabId === props.activeTabId ? '5px solid #fc4503' : ''};
  @media (min-width: 768px) {
    margin: 0px;
    width: 200px;
    font-size: 17px;
  }
`

export const HorizontalLine = styled.hr`
  margin: 0px;
`

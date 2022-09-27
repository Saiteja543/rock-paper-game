import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`

export const Container = styled.div`
  width: 80%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px 16px;
`

export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  padding: 10px;
`

export const PopupCloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  align-self: flex-end;
`

export const PopupImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`

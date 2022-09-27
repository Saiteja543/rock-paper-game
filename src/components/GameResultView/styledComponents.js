import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`

export const OptionButton = styled.button`
  width: 150px;
  height: 150px;
  margin: 25px;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const OptionImage = styled.img`
  height: 180px;
  width: 180px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResultName = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const PlayAgainButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 16px;
  font-family: 'Bree Serif';
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

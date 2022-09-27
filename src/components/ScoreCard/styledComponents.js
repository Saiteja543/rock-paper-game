import styled from 'styled-components'

export const GameScoreContainer = styled.div`
  border: 1px solid #ffffff;
  height: 150px;
  width: 100%;
  border-radius: 12px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GameOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100px;
`

export const GameOption = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  text-align: left;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  background-color: #ffffff;
  height: 130px;
  border-radius: 10px;
`

export const ScoreLabel = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 28px;
  font-weight: 600;
  margin: 0px;
`
export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 600;
  margin: 0px;
`

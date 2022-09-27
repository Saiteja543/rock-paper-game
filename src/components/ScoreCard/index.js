import {
  GameScoreContainer,
  GameOptionsContainer,
  GameOption,
  ScoreContainer,
  ScoreLabel,
  Score,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <GameScoreContainer>
      <GameOptionsContainer>
        <GameOption>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </GameOption>
      </GameOptionsContainer>
      <ScoreContainer>
        <ScoreLabel>Score</ScoreLabel>
        <Score>{score}</Score>
      </ScoreContainer>
    </GameScoreContainer>
  )
}

export default ScoreCard

import {
  ResultMainContainer,
  GameViewContainer,
  ResultContainer,
  OptionButton,
  OptionImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {
    getChoiceId,
    choicesList,
    gameResult,
    isButtonClicked,
    choicesArray,
    restartGame,
  } = props

  const showGameView = () => (
    <GameViewContainer>
      {isButtonClicked && (
        <>
          <OptionButton
            type="button"
            data-testid="rockButton"
            onClick={() => getChoiceId(choicesList[0].id)}
          >
            <OptionImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </OptionButton>
          <OptionButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => getChoiceId(choicesList[1].id)}
          >
            <OptionImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </OptionButton>
          <OptionButton
            type="button"
            data-testid="paperButton"
            onClick={() => getChoiceId(choicesList[2].id)}
          >
            <OptionImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </OptionButton>
        </>
      )}
      {!isButtonClicked && (
        <ResultMainContainer>
          <ResultContainer>
            <ResultImageContainer>
              <ResultName>YOU</ResultName>
              <OptionImage src={choicesArray[0].imageUrl} alt="your choice" />
            </ResultImageContainer>
            <ResultImageContainer>
              <ResultName>OPPONENT</ResultName>
              <OptionImage
                src={choicesArray[1].imageUrl}
                alt="opponent choice"
              />
            </ResultImageContainer>
          </ResultContainer>
          <ResultImageContainer>
            <ResultText>{gameResult}</ResultText>
            <PlayAgainButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultImageContainer>
        </ResultMainContainer>
      )}
    </GameViewContainer>
  )
  return showGameView()
}

export default GameResultView

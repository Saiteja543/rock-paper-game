import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameResultView from '../GameResultView'
import ScoreCard from '../ScoreCard'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {
  GameContainer,
  Container,
  RulesView,
  CloseButton,
  PopupView,
  PopupCloseButton,
  PopupImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    choicesArray: [choicesList[0], choicesList[1]],
    isButtonClicked: true,
    gameResult: 'YOU WON',
  }

  getResult = (option1, option2) => {
    if (option1.id === 'ROCK') {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (option1.id === 'PAPER') {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSS'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSS'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getChoiceId = id => {
    const {score} = this.state

    const ComputerChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const userChoice = choicesList.filter(eachChoice => eachChoice.id === id)

    const result = this.getResult(userChoice[0], ComputerChoice)

    let updatedScore = score

    if (result === 'YOU WON') {
      updatedScore = score + 1
    } else if (result === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }

    this.setState({
      isButtonClicked: false,
      choicesArray: [userChoice[0], ComputerChoice],
      gameResult: result,
      score: updatedScore,
    })
  }

  restartGame = () => this.setState({isButtonClicked: true})

  render() {
    const {score, isButtonClicked, gameResult, choicesArray} = this.state
    return (
      <GameContainer>
        <Container>
          <ScoreCard score={score} />
          <GameResultView
            choicesList={choicesList}
            gameResult={gameResult}
            isButtonClicked={isButtonClicked}
            choicesArray={choicesArray}
            getChoiceId={this.getChoiceId}
            restartGame={this.restartGame}
          />
          <RulesView>
            <Popup modal trigger={<CloseButton>RULES</CloseButton>}>
              {close => (
                <PopupView>
                  <PopupCloseButton type="button" onClick={() => close()}>
                    <RiCloseLine className="close-btn" />
                  </PopupCloseButton>
                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupView>
              )}
            </Popup>
          </RulesView>
        </Container>
      </GameContainer>
    )
  }
}

export default Game

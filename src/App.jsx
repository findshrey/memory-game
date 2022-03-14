import { useState, useEffect } from "react"

import { CARDS } from "./constants/cards"
import Playmat from "./components/Playmat"

// Initialize with empty choices
const initialChoice = {
  choiceOne: null,
  choiceTwo: null,
}

const shuffleCards = () => {
  return [...CARDS, ...CARDS]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
}

const App = () => {
  const [cards, setCards] = useState([])
  const [choices, setChoices] = useState(initialChoice)

  useEffect(() => {
    setCards(shuffleCards())
  }, [])

  const handleChoice = (card) => {
    if (!choices.choiceOne) {
      setChoices((prevState) => ({ ...prevState, choiceOne: card }))
    } else if (!choices.choiceTwo) {
      setChoices((prevState) => ({ ...prevState, choiceTwo: card }))
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Magic Match</h1>
      </header>
      <button>New Game</button>
      <Playmat cards={cards} handleChoice={handleChoice} />
    </div>
  )
}

export default App

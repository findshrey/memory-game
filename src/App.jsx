import { useState, useEffect } from "react"

import { CARDS } from "./constants/cards"
import Playmat from "./components/Playmat"

const shuffleCards = () => {
  return [...CARDS, ...CARDS]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
}

const App = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(shuffleCards())
  }, [])

  return (
    <>
      <header>
        <h1>Magic Match</h1>
      </header>
      <button>New Game</button>
      <Playmat cards={cards} />
    </>
  )
}

export default App

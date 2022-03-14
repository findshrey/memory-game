import imgCardBack from "./../assets/card-back.png"

const Playmat = ({ cards, choices, handleChoice }) => {
  const { choiceOne, choiceTwo } = choices

  return (
    <ul className="playmat">
      {cards.map((card) => {
        const cardFlipped =
          card.id === choiceOne?.id || choiceTwo?.id || card.matched

        return (
          <li
            className="card"
            key={card.id}
            onClick={() =>
              cardFlipped
                ? console.log("Select another card!")
                : handleChoice(card)
            }
          >
            <img src={card.imgSrc} />
            <img src={imgCardBack} />
          </li>
        )
      })}
    </ul>
  )
}

export default Playmat

import imgCardBack from "./../assets/card-back.png"

const Playmat = ({ cards, handleChoice }) => {
  return (
    <ul className="playmat">
      {cards.map((card) => (
        <li className="card" key={card.id} onClick={() => handleChoice(card)}>
          <img src={card.imgSrc} />
          <img src={imgCardBack} />
        </li>
      ))}
    </ul>
  )
}

export default Playmat

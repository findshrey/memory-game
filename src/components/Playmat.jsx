import imgCardBack from "./../assets/card-back.png"

const Playmat = ({ cards }) => {
  return (
    <ul className="playmat">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imgSrc} />
          <img src={imgCardBack} />
        </div>
      ))}
    </ul>
  )
}

export default Playmat

import imgCardBack from "./../assets/card-back.png"

import styles from "./Playmat.module.scss"

const Playmat = ({ cards, choices, handleChoice }) => {
  const { choiceOne, choiceTwo } = choices

  return (
    <ul className={styles.playmat}>
      {cards.map((card) => {
        const cardFlipped =
          card.id === choiceOne?.id || card.id === choiceTwo?.id || card.matched

        const flippedClass = cardFlipped ? styles.flipped : ""

        return (
          <li
            className={`${styles.card} ${flippedClass}`}
            key={card.id}
            onClick={() =>
              cardFlipped
                ? console.log("Select another card!")
                : handleChoice(card)
            }
          >
            <div className={styles["card-front"]}>
              <img src={card.imgSrc} />
            </div>
            <div className={styles["card-back"]}>
              <img src={imgCardBack} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Playmat

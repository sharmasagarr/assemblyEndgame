import { nanoid } from "nanoid"
import Proptype from "prop-types"
import clsx from "clsx"

export default function Word({word, guessedLetters, isGameLost}){

    const letterElements = word.split("").map((letter) => {
        const shouldRevealLetter = guessedLetters.includes(letter) || isGameLost
        const letterClass = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={nanoid()} className={letterClass}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

    return(
        <section className="word">
            {letterElements}
        </section>
    )
}

Word.propTypes = {
    word: Proptype.string.isRequired,
    guessedLetters: Proptype.array,
    isGameLost: Proptype.bool
}
import PropTypes from "prop-types"
import clsx from "clsx"

export default function Keyboard({ currentWord, guessedLetters, onClick, isGameOver}){
    const alphabet = "qwertyuiopasdfghjklzxcvbnm"

    function renderClass(letter){
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
          correct: isCorrect,
          wrong: isWrong
        })
        return className
      }

    const keyboardElements = alphabet.split("").map(letter => {
        return (
            <button 
                key={letter} 
                className={renderClass(letter)} 
                onClick={() => onClick(letter)}
                disabled={isGameOver}
            >
                {letter.toUpperCase()}
            </button>
        )
    })
    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}

Keyboard.propTypes = {
    currentWord: PropTypes.string.isRequired,
    guessedLetters: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isGameOver: PropTypes.bool
}
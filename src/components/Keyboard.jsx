import PropTypes from "prop-types"

export default function Keyboard({getClass, onClick, isGameOver}){
    const alphabet = "qwertyuiopasdfghjklzxcvbnm"

    const keyboardElements = alphabet.split("").map(letter => {
        return (
            <button 
                key={letter} 
                className={getClass(letter)} 
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
    getClass: PropTypes.func,
    onClick: PropTypes.func,
    isGameOver: PropTypes.bool
}
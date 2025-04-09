import PropTypes from "prop-types"
import clsx from "clsx"
import { languages } from "../languages"
import { getFarewellText } from "../utils"

export default function GameStatus(props){

    function renderGameStatus(){
        if (!props.isGameOver && props.isLastGuessIncorrect){
            return (
                <p className="farewell-message">{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
            )
        }
        
        if(props.isGameWon){
            return (
                <>
                    <h2>You won!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        if(props.isGameLost){
            return (
                <>
                    <h2>Game Over!</h2>
                    <p>You lose! Better start learning assembly 😭</p>
                </>
            )
        }

        return null
    }

    const gameStatusClass = clsx("game-status", {
        won: props.isGameWon,
        lost: props.isGameLost,
        farewell: !props.isGameOver && props.isLastGuessIncorrect
    })
    return (
        <section className={gameStatusClass}>
            {renderGameStatus()}
        </section>
    )
}

GameStatus.propTypes = {
    isLastGuessIncorrect: PropTypes.bool,
    wrongGuessCount: PropTypes.number,
    isGameOver: PropTypes.bool,
    isGameWon: PropTypes.bool,
    isGameLost: PropTypes.bool,
}
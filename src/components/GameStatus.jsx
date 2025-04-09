import PropTypes from "prop-types"
import clsx from "clsx"
import { languages } from "../languages"
import { getFarewellText } from "../utils"

export default function GameStatus({isLastGuessIncorrect, wrongGuessCount, isGameOver, isGameWon, isGameLost}){

    function renderGameStatus(){
        if (!isGameOver && isLastGuessIncorrect){
            return (
                <p className="farewell-message">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
            )
        }
        
        if(isGameWon){
            return (
                <>
                    <h2>You won!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        if(isGameLost){
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
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
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
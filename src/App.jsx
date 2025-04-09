import './App.css'
import { useState } from 'react'
import clsx from 'clsx'
import Confetti from 'react-confetti'
import { languages } from './languages'
import { getRandomWord } from "./utils"
import Header from './components/Header'
import GameStatus from './components/GameStatus'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'

export default function AssemblyEndgame(){
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessLetter && !currentWord.includes(lastGuessLetter)

  function addGuessedLetters(letter){
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ?
        prevLetters :
        [...prevLetters, letter]
    )
  }

  function startNewGame(){
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  function renderKeyboardClass(letter){
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    return className
  }

  return (
    <main>
      {isGameWon && 
        <Confetti
          recycle={false}
          numberOfPieces={2000} 
          width={window.innerWidth} 
          height={window.innerHeight} 
        />
      }
      <Header />
      <GameStatus
        isLastGuessIncorrect = {isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
        isGameOver={isGameOver}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
      />
      <Languages
        wrongGuessCount={wrongGuessCount} 
      />
      <Word 
        word = {currentWord}
        guessedLetters = {guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        isGameOver={isGameOver}
        getClass={renderKeyboardClass}
        onClick={addGuessedLetters}
      />
     {isGameOver && 
      <section className="new-game">
        <button onClick={startNewGame}>New Game</button>
      </section>
      }
    </main>
  )
}
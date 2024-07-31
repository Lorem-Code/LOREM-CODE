import React from 'react'

const GameOver = ({isVisible, score, onClose}) => {
    if (!isVisible) return null
  return (
    <div className='fixed bg-black opacity-50 inset-0'>
        <div>
            <h1>GAME OVER!!</h1>
            <p>Your Score: {score}</p>
            <div>
                <button>Play Again</button>
            </div>
        </div>
    </div>
  )
}

export default GameOver
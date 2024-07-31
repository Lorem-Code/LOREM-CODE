import React, { useState } from 'react'
import TrashItem from './TrashItem'
import TrashCan from './TrashCan'

const trashItems = [
    {id:1, type:'organic', src:'../assets/img/game/organic.jpg'},
    {id:2, type:'anorganic', src:'../assets/img/game/anorganic.jpg'},
    {id:3, type:'d3', src:'../assets/img/game/d3.jpg'},
]

const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * trashItems.length)
    return trashItems[randomIndex]
}

const GameSampah = () => {

    const [currentItem, setCurrentItem] = useState(getRandomItem())
    const [score, setScore] = useState(0)
    const [lives, setLives] = useState(3)
    const [isGameOver, setIsGameOver] = useState(false)

    const handleDrop = (type, id) => {
        const item = trashItems.find(item => item.id === parseInt(id))
        if (item.type === type) {
            setScore(score + 1)
            setCurrentItem(getRandomItem())
        } else {
            setLives(lives - 1)
            if (lives <= 1) {
                setIsGameOver(true)
            } else {
                setCurrentItem()
            }
        }
    }

    const handlePlayAgain = () => {
        setCurrentItem(getRandomItem())
        setLives(3)
        setScore(0)
        setIsGameOver(false)
    }

  return (
    <div className='bg-gray-100  flex flex-col items-center min-h-screen'>
        <header className='text-center py-9'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Trash Game</h1>
            <p className='text-sm'>adfasdfadf</p>
        </header>

        <div className='text-center py-6'>
            <h1 className='text-xl font-bold'>Score : {score}</h1>
            {Array.from({length:lives}).map((_,index)=>(

            <span key={index} className='text-3xl text-red-600'>&hearts;</span>
            ))}
        </div>

        <div className='pt-5'>
            <TrashItem src={currentItem.src} id={trashItems.length}   />
        </div>
        <div className='mt-3 flex space-x-3'>
            <TrashCan type='organic' onDrop={handleDrop} />
            <TrashCan type='anorganic' onDrop={handleDrop} />
            <TrashCan type='d3' onDrop={handleDrop} />
        </div>

    </div>
  )
}

export default GameSampah
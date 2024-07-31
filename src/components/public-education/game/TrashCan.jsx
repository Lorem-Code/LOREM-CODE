import React from 'react'

const TrashCan = ({type, onDrop}) => {

    const handleDrop = (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('text');
        onDrop(type,data)
    }
    const handleDragOver = (e)=> {
        e.preventDefault()
    }

  return (
    <div
    className='w-40 h-40 rounded-lg border-2 border-gray-700 justify-center items-center flex'    
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    >
        <h1 className='text-xl font-bold '>{type}</h1>
    </div>
  )
}

export default TrashCan
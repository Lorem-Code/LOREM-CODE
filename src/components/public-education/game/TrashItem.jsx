import React from 'react'

const TrashItem = ({src, id}) => {
    const handleDragStar = (e) => {
        e.dataTransfer.setData('text',id)
    }


  return (
    <img src={src} alt="Trash" draggable='true' onDragStart={handleDragStar} 
    className='w-[100px] h-[100px] rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'
    />
  )
}

export default TrashItem
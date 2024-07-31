import React, { useEffect, useState } from 'react'

function Puzzle () {
    const [widgets, setWidgets] = useState ([])
    const [availableWidgets, setAvailableWidgets] = useState ([])
    const [selectedWidget, setSelectedWidget] = useState (null)
    const [notification, setNotification] = useState ("")
    const [isPopupVisible, setIsPopupVisible] = useState (false)
    const [isLevelComplete, setIsLevelComplete] = useState (false)

    const correctPositions = [ 
        {index: 0, widgetType: "widgetA"},
        {index: 1, widgetType: "widgetB"},
        {index: 2, widgetType: "widgetC"},
        {index: 3, widgetType: "widgetD"},
        {index: 4, widgetType: "widgetE"},
        {index: 5, widgetType: "widgetF"},
        {index: 6, widgetType: "widgetG"},
        {index: 7, widgetType: "widgetH"},
        {index: 8, widgetType: "widgetI"}
    ]

    const imageParts = [
        "/assets/widgeta.jpg",
        "/assets/widgetb.jpg",
        "/assets/widgetc.jpg",
        "/assets/widgetd.jpg",
        "/assets/widgete.jpg",
        "/assets/widgetf.jpg",
        "/assets/widgetg.jpg",
        "/assets/widgeth.jpg",
        "/assets/widgeti.jpg",
    ]

    useEffect (() => {
        resetPuzzle();
    }, [])

    useEffect(() => {
        if (isLevelComplete) {
            setNotification("Selamat Anda Telah Berhasil")
            setIsPopupVisible(true);
        }
    }, [isLevelComplete])

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    function handleDrag(e, widgetType) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleDrop(e, dropIndex) {
        const widgetType = e.dataTransfer.getData("widgetType")
        placeWidget(widgetType, dropIndex);
    }

    function placeWidget(widgetType, dropIndex) {
        const isCorrect = correctPositions.some(pos => pos.index === dropIndex && pos.widgetType === widgetType)

        if(isCorrect) {
            placeWidget(prevWidgets => {
                const newWidgets = [...prevWidgets];
                newWidgets[dropIndex] = widgetType;
                return newWidgets
            })  
            setAvailableWidgets(prevAvailable => prevAvailable.filter(widget => widget !== widgetType))
            setSelectedWidget(null)
            setNotification("Benar!")
            setIsPopupVisible(true);

            const allCorrect = correctPositions.every(pos => widgets[pos.index] === pos.widgetType || pos.index === dropIndex)
            if(allCorrect) {
                setIsLevelComplete(true)
            }
        } else {
            setNotification("Salah !")
            setIsPopupVisible(true)
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleWidgetClick(widgetType) {
        setSelectedWidget(widgetType);
    }

    function handleBoxCick(boxIndex) {
        if(selectedWidget) {
            placeWidget(selectedWidget, boxIndex)
        }
    }

    function resetPuzzle() {
        const widgets = ["widgetA", "widgetB", "widgetC", "widgetD", "widgetE", "widgetF", "widgetG", "widgetH", "widgetI"]
        setAvailableWidgets(shuffleArray(widgets))
        setWidgets([])
        setSelectedWidget(null);
        setNotification("")
        setIsPopupVisible(false)
        setIsLevelComplete(false)
    }

    function handleRestart() {
        resetPuzzle();
    }

    function handleNextLevel() {
        resetPuzzle();
    }

    const gridSize = 3;
    const grid = Array(gridSize * gridSize).fill(null)

    return (
        <div className='relative flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <header className='py-4 text-center'>
                <h1 className='text-3xl text-black font-bold mb-6'>Puzzle</h1>
                <p className='text-xl mb-4'>Drag and Drop the widgets to ....</p>
            </header>
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mb-6 lg:mb-0 lg:mr-6 order-2 lg:order-none'>
                    <div className='grid grid-cols-3 gap-4'>
                        {availableWidgets.map(widget => (
                            <div
                                key={widget}
                                className={` w-24 h-24 flex flex-col justify-center items-center bg-green-500 text-white text-lg rounded shadow-md transition-transform transform active:scale-95 active:shadow-lg ${selectedWidget === widget ? 'ring-4 ring-blue-500' : ''}`}
                                draggable
                                onDragStart={(e) => (e, handleDrag)}
                                onClick={() => handleWidgetClick}>
                                <img src={imageParts[correctPositions.find(pos => pos.widgetType === widget).index]} alt={widget} className='w-full h-full object-contain' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-center order-3 lg:order-none'>
                    <div className='grid grid-cols-3 bg-white p-2 border-gray-400 gap-4'>
                        {grid.map(index => (
                            <div
                                key={index}
                                className='w-24 h-24 justify-center rounded-lg'
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDrop={handleDrop}
                                onClick={(e) => handleBoxCick(e,index)}>
                                <img src={imageParts[correctPositions.find(pos => pos.widgetType === index)]} alt={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Puzzle
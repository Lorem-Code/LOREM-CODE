import React from 'react'

const SmartChild = () => {
    const handleButtonClick =(url)=> {
        window.location.href = url;
    }

    const smarts = [
        {id:1, alt:'game', src:'./assets/img/game.jpg', link:'/smart-child/game-sampah'},
        {id:2, alt:'animation', src:'./assets/img/cerita.png', link:'/animation'},
    ]

  return (
    <div className='min-h-screen justify-center items-center bg-gray-100'>
        <header className='py-16 text-center text-black px-4'>
            <h1 className='text-3xl md:text-5xl font-bold'>Smart City for Children</h1>
            <p className='text-sm mt-4'>Smart city education for Children asdfad</p>
        </header>
        <div className='flex flex-col md:flex-row justify-center py-4'>
            {smarts.map(smart => (
            <div key={smart.id} className='p-3'>
                <button onClick={()=>handleButtonClick(smart.link)}>
                    <img src={smart.src} alt={smart.alt} className='w-[250px] h-[250px] rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'/>
                </button>
            </div>

            ))}
        </div>
    </div>
  )
}

export default SmartChild
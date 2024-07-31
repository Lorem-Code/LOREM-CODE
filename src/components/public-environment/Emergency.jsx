import React from 'react'

const Emergency = () => {

    const handleButtonClick =(url)=> {
        window.location.href =url;
    }

    const emergencys = [
        {id:1, alt:'who', src:'./assets/img/who.jpg', link:'https://www.who.int/'},
        {id:2, alt:'kemenkes', src:'./assets/img/kemenkes.png', link:'https://poltekkestasikmalaya.ac.id/'},
        {id:3, alt:'bmkg', src:'./assets/img/bmkg.jpg', link:'https://www.bmkg.go.id/tag/?tag=tasikmalaya&lang=ID'},
    ]

  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-xl mx-auto text-center md:text-left p-7'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Emergency Alert and Notification</h1>
                <p className='text-sm mt-4'>Emergency notifications for the public regarding natural disaster and pandemics</p>
            </div>
            <div className=' py-5'>
                <p className='text-center text-sm font-light font-sans '>Press the image to enter the page.</p>
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>
                    {emergencys.map((emergency,index)=>(
                    <div key={emergency.id} className={`${index === emergencys.length -1 ? 'col-span-2':''}`}>
                        <button onClick={()=>handleButtonClick(emergency.link)}>
                            <img src={emergency.src} alt={emergency.alt} className={`w-[150px] h-[150px] rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105 `} />
                        </button>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Emergency
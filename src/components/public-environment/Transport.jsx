import React, { useState } from 'react'

const Transport = () => {

    const [activeMenu, setActiveMenu] = useState(1)

    const menus = [
        {
            id:1,
            title:'Angkot',
            images:[
                {src:'./assets/img/angkot.jpg', alt:'angkot', link:'https://portal.tasikmalayakota.go.id/index.php/q/angkot'}
            ]
        },
        {
            id:2,
            title:'Bus',
            images:[
                {src:'./assets/img/primajasa.jpg', alt:'primajasa', link:'https://primajasa.info/tarif-ppkm/'},
                {src:'./assets/img/budiman.png', alt:'budiman', link:'https://www.budiman.co.id/'},
            ]
        },
        {
            id:3,
            title:'Train',
            images:[
                {src:'./assets/img/traveloka.png', alt:'traveloka', link:'https://www.traveloka.com/id-id/kereta-api/ke/tasikmalaya-tsm'},
                {src:'./assets/img/kai.jpg', alt:'kai', link:'https://www.kai.id/'},
                {src:'./assets/img/tiket.jpg', alt:'tiket', link:'https://www.tiket.com/kereta-api/jurusan/tasikmalaya'},
            ]
        },
    ]

  return (
    <div className='bg-gray-100 justify-center items-center min-h-screen'>
        <header className='text-center py-9'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Tasikmalaya City Public Transportation</h1>
            <p className='text-sm'>Train and bus departure schedules and ticket, and public transfortation lines</p>
        </header>
        <div className='py-3 flex justify-center space-x-4'>
            {menus.map(menus => (
            <button
            key={menus.id}
            onClick={()=> setActiveMenu(menus.id)}
            className={`py-2 px-6 font-semibold rounded-full transition duration-300 ease-in-out ${activeMenu === menus.id ? 'bg-black text-white':'bg-white text-black hover:bg-gray-500'}`}
            >
            {menus.title}    
            </button>
            ))}
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center py-3'>
            {menus.find(menus => menus.id === activeMenu)?.images.map((images,index)=>(
            <div key={index} className='p-2'>
                <button>
                    <img src={images.src} alt="kendaraan" className='w-[250px] h-[250px] rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105' />
                </button>
            </div>
            ))}

        </div>
        <p className='py-3 text-center font-light text-sm'>Press the image to enter the page.</p>

    </div>
  )
}

export default Transport
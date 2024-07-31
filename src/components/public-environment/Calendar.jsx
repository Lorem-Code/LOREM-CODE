import React from 'react'

const Calendar = () => {

const calendars = [
    {id:1, title:'', src:'./assets/img/event.jpg', link:'https://hut22.tasikmalayakota.go.id/'},
    {id:2, title:'', src:'./assets/img/event.jpg', link:'https://bandung.kompas.com/read/2023/01/16/092717878/payung-geulis-tasikmalaya-wakili-indonesia-di-umbrella-festival-thailand?page=all'},
    {id:3, title:'', src:'./assets/img/event.jpg', link:'https://www.detik.com/jabar/wisata/d-7216320/125-event-pariwisata-bakal-digelar-di-kota-tasikmalaya-sepanjang-2024'},
]

  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-xl mx-auto text-center md:text-left p-7'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Local Event Calendar</h1>
                <p className='text-sm mt-4'>Annual activities organized by the Tasikmalaya City Goverment</p>
            </div>
            <div className=' py-5'>
                <p className='text-center text-sm font-light font-sans '>Press image to see the details</p>
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>
                    {calendars.map(calendar => (
                  <div key={calendar.id} className=''>
                    <a href={calendar.link}>
                    <img src={calendar.src} alt="" className='w-[150px] h-[150px] rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'/>
                    </a>
                  </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calendar
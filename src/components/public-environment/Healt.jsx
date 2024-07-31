import React from 'react'

const Healt = () => {

    const handleButtonClick =(url)=> {
        window.location.href = url;
    }

    const healths = [
        {
            id:1,
            title:'RS PERMATA BUNDA',
            alt:'RS PERMATA BUNDA',
            location:'jl indihiang cisayong tasikmalaya jawa barat indonesia',
            src:'./assets/img/rs/permata-bunda.jpg',
            link:'https://rsupb.com/'
        },
        {
            id:2,
            title:'RS JASA KARTINI',
            alt:'RS JASA KARTINI',
            location:'jl indihiang cisayong tasikmalaya jawa barat indonesia',
            src:'./assets/img/rs/jk.jpg',
            link:'https://profil.jasakartini.com/'
        },
        {
            id:3,
            title:'RS PRASETYA BUNDA',
            alt:'RS PRASETYA BUNDA',
            location:'jl indihiang cisayong tasikmalaya jawa barat indonesia',
            src:'./assets/img/rs/prasetya.jpg',
            link:'https://rsprasetyabunda.com/'
        },
        {
            id:4,
            title:'RS TMC',
            alt:'RS TMC',
            location:'jl indihiang cisayong tasikmalaya jawa barat indonesia',
            src:'./assets/img/rs/tmc.jpg',
            link:'http://www.rstmc.co.id/'
        },
        {
            id:5,
            title:'RS DR.SOEKARDJO',
            alt:'RS DR.SOEKARDJO',
            location:'jl indihiang cisayong tasikmalaya jawa barat indonesia',
            src:'./assets/img/rs/sukardjo.jpg',
            link:'https://rsud.tasikmalayakota.go.id/'
        },
        {
            id:6,
            title:'RS SAYANG BUNDA',
            alt:'RS SAYANG BUNDA',
            location:'jl indihiang cisayong tasikmalaya jawa barat indonesia',
            src:'./assets/img/rs/sayang-bunda.jpg',
            link:'https://www.halodoc.com/rumah-sakit/nama/rsb-sayang-bunda-tasikmalaya'
        },
    ]

  return (
    <div className='bg-gray-100 justify-center items-center min-h-screen'>
        <header className='text-center py-9 px-2'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Health Resources</h1>
            <p className='text-sm'>Press the button for knowing the detail about the hospitals.</p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto p-5'>
        {healths.map(health => (
            <div key={health.id} className='relative flex flex-col max-w-[26rem] w-full bg-white rounded-xl shadow-xl shadow-gray-400'>
                <div className='relative mx-4 mt-4 h-48 overflow-hidden rounded-lg shadow-lg shadow-gray-400'>
                    <img src={health.src} alt={health.alt} className='object-cover w-full h-full'/>
                </div>
                <div className='p-6 flex-flex-col'>
                    <div className='text-black'>
                        <h1 className='text-lg font-sans font-semibold'>{health.title}</h1>
                        <p className='text-md font-sans font-light mt-2'>{health.location}</p>
                    </div>
                    <div className='pt-3'>
                        <button onClick={()=>handleButtonClick(health.link)} className='text-white bg-black rounded-lg w-full py-3 px-7 shadow-lg shadow-gray-300 hover:shadow-gray-400 active:bg-opacity-70'>VIEW</button>
                    </div>
                </div>
            </div>
        ))}

        </div>
    </div>
  )
}

export default Healt
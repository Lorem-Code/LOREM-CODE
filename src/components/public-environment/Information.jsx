import React from 'react'

export const Information = () => {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }
    const informations = [
        {
            id:1, title:'INews', src:"./assets/img/news.jpg", link:'https://tasikmalaya.inews.id/'
        },
        {
            id:2, title:'Radar Tasik', src:"./assets/img/news.jpg", link:'https://radartasik.id/'
        },
        {
            id:3, title:'Pikiran Rakyat', src:"./assets/img/news.jpg", link:'https://tasikmalaya.pikiran-rakyat.com/'
        },
        {
            id:4, title:'Detik.com', src:"./assets/img/news.jpg", link:'https://www.detik.com/tag/tasikmalaya'
        },
        {
            id:5, title:'Berita Satu', src:"./assets/img/news.jpg", link:'https://www.beritasatu.com/tag/tasikmalaya'
        },
    ]
  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-xl mx-auto text-center md:text-left'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Smart City Information Hub</h1>
                <p className='text-sm mt-4'>The latest news about Tasikmalaya City from trusted sources.</p>
            </div>
            <div className=' py-5'>
                <p className='text-center text-sm font-light font-sans '>Press the image to enter the page.</p>
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>

                    {informations.map((information,index) => (
                    
                    <div onClick={()=>handleButtonClick(information.link)} key={information.id} className={`w-[150px] h-[150px] rounded-lg bg-white shadow-lg shadow-gray-400 transform transsition-transform duration-300 hover:scale-105 ${index === informations.length -1 ? 'col-span-2':''}`}>
                        <div className='mx-4'>
                            <img src={information.src} alt="berita" />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-black text-lg font-semibold'>{information.title}</h1>
                        </div>
                    </div>
                    
                    ))}
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

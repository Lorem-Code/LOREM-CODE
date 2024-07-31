import React from 'react'

const Recycling = () => {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }
  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-xl mx-auto text-center md:text-left p-7'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Recycling Guide and Waste Management</h1>
                <p className='text-sm mt-4'>Educate to the public about how to recycle and where to dispose of waste as well as waste collection scheduls.</p>
            </div>
            <div className=' py-5'>
                <p className='text-center text-sm font-light font-sans '>Press the image to enter the page.</p>
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>
                    
                    <div onClick={()=>handleButtonClick('https://news.detik.com/berita/d-6573967/bagaimana-proses-daur-ulang-sampah-simak-langkah-langkahnya')} className='bg-black text-white w-[150px] h-[150px] justify-center flex items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                        <h1 className='text-center p-2'>Recycling Tutorial</h1>
                    </div>
                    <div onClick={()=>handleButtonClick('https://data.tasikmalayakota.go.id/home/dinas-lingkungan-hidup/data-persebaran-tempat-penampungan-sampah-sementara-tps/')} className='bg-black text-white w-[150px] h-[150px] justify-center flex items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                        <h1 className='text-center p-2'>Tempat Pembuangan sampah</h1>
                    </div>
                    <div onClick={()=>handleButtonClick('')} className='col-span-2 bg-black text-white w-[150px] h-[150px] justify-center flex items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                        <h1 className=' text-center p-2'>Jadwal pengambilan sampah</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recycling
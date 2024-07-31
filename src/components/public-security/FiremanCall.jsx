import React from 'react'

const FiremanCall = () => {
    const handleButtonClick =(url)=> {
        window.location.href = url;
    }
  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-2xl mx-auto text-center md:text-left p-7'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Fireman Call Center</h1>
                <p className='text-sm mt-4'>Fireman contact and fireman function for the public.</p>
            </div>
            <div className=' py-5'>
                
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>
                <a href="tel:112">
                    <div className='bg-white text-black w-[250px] h-[250px] justify-center flex items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                        
                        <img src="./assets/img/contact.png" alt="fungsi" />
                    </div>
                </a>
                    <div onClick={()=>handleButtonClick('https://www.bromindo.com/alat-pemadam-kebakaran/#:~:text=Mengenal%20Berbagai%20Jenis%20Alat%20Pemadam,kebakaran%20agar%20tidak%20menyebar%20luas.')} className='relative bg-black text-white w-[250px] h-[250px] justify-center flex flex-col overflow-hidden items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                    <img src="./assets/img/fireman.jpg" alt="tlp" className='object-cover w-full h-full'/>
                        <div className='absolute items-center justify-center text-center'>
                            <h1 className='text-4xl font-bold'>FUNCTION</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FiremanCall
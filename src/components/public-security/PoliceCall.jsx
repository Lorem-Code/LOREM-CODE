import React from 'react'

const PoliceCall = () => {
    const handleButtonClick =(url)=> {
        window.location.href = url;
    }
  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-2xl mx-auto text-center md:text-left p-7'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Police Call Center</h1>
                <p className='text-sm mt-4'>Police contact and Police function for the public.</p>
            </div>
            <div className=' py-5'>
                
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>
                    
                    <div onClick={()=>handleButtonClick('http://legalitas.unbari.ac.id/index.php/Legalitas/article/view/192#:~:text=Fungsi%20kepolisian%20adalah%20%C3%A2%E2%82%AC,pengayoman%2C%20dan%20pelayanan%20kepada%20masyarakat.')} className='relative bg-black text-white w-[250px] h-[250px] justify-center flex flex-col overflow-hidden items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                    <img src="./assets/img/polisi.jpg" alt="" className='object-cover w-full h-full'/>
                        <div className='absolute items-center justify-center text-center'>
                            <h1 className='text-4xl font-bold'>FUNCTION</h1>
                        </div>
                    </div>
                   
                    <a href="tel:112">
                    <div className='bg-white text-black w-[250px] h-[250px] justify-center flex items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                        
                        <img src="./assets/img/contact.png" alt="telp" />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PoliceCall
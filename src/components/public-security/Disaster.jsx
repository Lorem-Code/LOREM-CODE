import React from 'react'

const Disaster = () => {
    const handleButtonClick =(url)=> {
        window.location.href = url;
    }
  return (
    <div className='min-h-screen justify-center items-center flex bg-gray-100'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-5 max-w-2xl mx-auto text-center md:text-left p-7'>
                <h1 className='text-black text-3xl md:text-5xl font-bold '>Regional Board for Disaster Management</h1>
                <p className='text-sm mt-4'>Regional Board for Disaster Management contact and function for the public.</p>
            </div>
            <div className=' py-5'>
                
                <div className='grid grid-cols-2 gap-4 mt-4 justify-items-center'>
                    
                    <div onClick={()=>handleButtonClick('https://bpbd.bogorkab.go.id/tugas-dan-fungsi/#:~:text=Fungsi%20komando%2C%20BPBD%20melaksanakan%20penanggulangan,dalam%20rangka%20penanganan%20darurat%20bencana.')} className='relative bg-black text-white w-[250px] h-[250px] justify-center flex flex-col overflow-hidden items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                    <img src="./assets/img/roboh.jpg" alt="fungsi" className='object-cover w-full h-full'/>
                        <div className='absolute items-center justify-center text-center'>
                            <h1 className='text-4xl font-bold'>FUNCTION</h1>
                        </div>
                    </div>
                    <div onClick={()=>handleButtonClick('tel:112')} className='bg-white text-black w-[250px] h-[250px] justify-center flex items-center rounded-lg shadow-lg shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                        
                        <img src="./assets/img/contact.png" alt="tlp" />
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Disaster
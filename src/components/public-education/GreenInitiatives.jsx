import React from 'react'

const GreenInitiatives = () => {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }
  return (
    <div className='min-h-screen justify-center items-center bg-gray-100 '>
        <header className='text-black text-center py-9 max-w-2xl mx-auto'>
            <h1 className='text-3xl md:text-5xl font-bold'>Green Iniatives and Sustainabilty</h1>
            <p className='text-sm mt-4'>Education for the public in environmental preservation and go green movement.</p>
        </header>
        
        <div className='flex flex-col md:flex-row justify-center py-7 gap-4 items-center'>
            
            <div onClick={()=>handleButtonClick('https://bkpsdm.jogjakota.go.id/detail/index/28077')} className='w-[250px] h-[250px] rounded-lg bg-white shadow-lg shadow-gray-400 transform transsition-transform duration-300 hover:scale-105'>
               <div className='mx-6'>
                <img src="./assets/img/green1.jpg" alt="" />
               </div>
               <div className='text-center text-xl font-semibold'>
                <h1>Go Green</h1>
               </div>
            </div>
            
            <div onClick={()=>handleButtonClick('https://bpbd.bogorkab.go.id/pelestarian-lingkungan-dan-kebijakan-kebencanaan/')} className='w-[250px] h-[250px] rounded-lg bg-white shadow-lg shadow-gray-400 transform transsition-transform duration-300 hover:scale-105'>
               <div className='mx-6'>
                <img src="./assets/img/green.jpg" alt="" />
               </div>
               <div className='text-center text-lg font-semibold '>
                <h1>Environmental Preservation</h1>
               </div>
            </div>

        </div>

    </div>
  )
}

export default GreenInitiatives
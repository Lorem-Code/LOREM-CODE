import React from 'react'

const ChildProtection = () => {
    const handleButtonClick =(url)=> {
        window.location.href = url;
    }
  return (
    <div className='min-h-screen justify-center items-center bg-gray-100 '>
        <header className='py-16 text-center text-black max-w-3xl mx-auto'>
            <h1 className='text-3xl md:text-5xl font-bold'>Child and Woman's Protection</h1>
            <p className='text-sm mt-4'>Press the button to see the details.</p>
        </header>
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            <div className='relative flex flex-col max-w-[26rem] w-full bg-white rounded-xl shadow-xl shadow-gray-400'>
                <div className='relative mx-4 mt-4 h-48 overflow-hidden rounded-lg shadow-lg shadow-gray-400'>
                    <img src='./assets/img/perlindungan-anak.png' alt='perlindungan anak' className='object-cover w-full h-full'/>
                </div>
                <div className='p-6 flex-flex-col'>
                    <div className='text-black'>
                        <h1 className='text-lg font-sans text-center font-semibold'>Perlindungan Anak</h1>
                        
                    </div>
                    <div className='pt-3'>
                        <button onClick={()=>handleButtonClick('https://www.kemenpppa.go.id/')} className='text-white bg-black rounded-lg w-full py-3 px-7 shadow-lg shadow-gray-300 hover:shadow-gray-400 active:bg-opacity-70'>VIEW</button>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col max-w-[26rem] w-full bg-white rounded-xl shadow-xl shadow-gray-400'>
                <div className='relative mx-4 mt-4 h-48 overflow-hidden rounded-lg shadow-lg shadow-gray-400'>
                    <img src='./assets/img/perlindungan-diri.jpeg' alt='perlindungan anak' className='object-cover w-full h-full'/>
                </div>
                <div className='p-6 flex-flex-col'>
                    <div className='text-black'>
                        <h1 className='text-lg font-sans text-center font-semibold'>Perlindungan Anak</h1>
                        
                    </div>
                    <div className='pt-3'>
                        <button onClick={()=>handleButtonClick('https://forumanak.id/kegiatanView/pnz8y33qw6')} className='text-white bg-black rounded-lg w-full py-3 px-7 shadow-lg shadow-gray-300 hover:shadow-gray-400 active:bg-opacity-70'>VIEW</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChildProtection
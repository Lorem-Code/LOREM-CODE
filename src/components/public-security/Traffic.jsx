import React from 'react'

const Traffic = () => {
  return (
    <div className='bg-gray-100 justify-center items-center min-h-screen'>
        <header className='text-center py-9'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Traffic CCTV</h1>
            <p className='text-sm'>Access traffic CCTV to see what's happening in traffic</p>
        </header>
        <div className='py-6'>
            <iframe src="https://atcs.tasikmalayakota.go.id/#live" frameborder="0"
            scrolling='no'
            allowFullScreen
            className='max-w-7xl w-full rounded-lg mx-auto border-2 border-gray-600 h-[110vh]'
            ></iframe>
        </div>
    </div>
  )
}

export default Traffic
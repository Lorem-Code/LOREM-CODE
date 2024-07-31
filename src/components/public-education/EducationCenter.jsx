import React from 'react'

const EducationCenter = () => {

    const educations =[
        {id:1, title:'TK', alt:'tk', src:'./assets/img/school.jpg', link:'https://opendata.tasikmalayakota.go.id/dataset/daftar-sekolah-taman-kanak-kanak-tk-di-kota-tasikmalaya'},
        {id:2, title:'SD', alt:'tk', src:'./assets/img/school.jpg', link:'https://opendata.tasikmalayakota.go.id/dataset/daftar-sekolah-dasar-sd-di-kota-tasikmalaya'},
        {id:3, title:'SMP', alt:'tk', src:'./assets/img/school.jpg', link:'https://opendata.tasikmalayakota.go.id/dataset/daftar-sekolah-menengah-pertama-smp-di-kota-tasikmalaya'},
        {id:4, title:'SMA', alt:'tk', src:'./assets/img/school.jpg', link:'https://opendata.tasikmalayakota.go.id/dataset/daftar-sekolah-menengah-atas-sma-di-kota-tasikmalaya'},
        {id:5, title:'UNIVERSITAS', alt:'tk', src:'./assets/img/school.jpg', link:'https://portal.tasikmalayakota.go.id/index.php/q/perguruan'},
    ]

  return (
    <div className='bg-gray-100 min-h-screen justify-center items-center flex'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-3 text-center md:text-left max-w-xl mx-auto p-4'>
                <h1 className='text-3xl md:text-5xl font-bold mb-4'>Educationan Resources and Program</h1>
                <p className='text-sm'>School locations from kindergarten, high school, to University as well as information and programs thry use.</p>
            </div>
            <div className='flex-1 text-center py-3'>
                <p className='text-black font-sans text-sm font-light'>Press the image to enter the page.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5 justify-items-center'>
                    {educations.map((education,index) => (
                    <a  key={education.id} href={education.link} className={`${index === educations.length -1 ? 'col-span-2' : ''}`}>
                        <div className='w-[150px] h-[150px] rounded-lg shadow-lg bg-white shadow-gray-400 transform transition-transform duration-300 hover:scale-105'>
                            <div className='mx-4'>
                                <img src={education.src} alt={education.alt} className=''/>
                            </div>
                            <div className='text-center '>
                                <h1 className='text-md font-semibold'>{education.title}</h1>
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationCenter
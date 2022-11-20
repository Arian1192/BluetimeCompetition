import React from 'react'
import Hover from 'react-3d-hover'

const Services = [
    {
        id: 1,
        title: 'International Racing Services',
        description: 'Servicio Internacional enfocado al motorsport, Asistencia en competición.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
    {
        id: 2,
        title: 'Race Car Builds',
        description: 'Preparacion de motores para competicion, tanto para tandas como para competiciones mas profesionales.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
    {
        id: 3,
        title: 'Porsche Corner',
        description: 'Especialistas en Porsche, tanto en el mundo de la competicion como en el mundo de la restauracion de clasicos y coches de calle.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
    {
        id: 4,
        title: 'Gearbox Services',
        description: 'Servicio de preparacion de cajas de cambios, tanto para competicion como para coches de calle.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
    {
        id: 5,
        title: 'Engine Services',
        description: 'Servicio de preparacion de motores, desde culatas, camisas, pistones, cigueñales, para competicion y tandas o para restauracion.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
    {
        id: 6,
        title: 'Auction Support - Expertise',
        description: 'Servicio de asistencia en subastas de coches de competicion, tanto en subastas online como en subastas presenciales.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
    {
        id: 7,
        title: 'Full Car Restoration',
        description: 'Restauracion de coches de competicion, tanto para coches de calle como para coches de competicion completa.',
        image: 'https://cdn-icons-png.flaticon.com/512/586/586102.png'
    },
]


const CardService = () => {
    return (
        <div className='max-sm:w-full mb-40 flex item-center justify-center pr-4 md:3/6 px-10 max-md:w-3/6xl:w-4/5 2xl:w-2/3 md:grid grid-cols-3 gap-10 '>
            {Services.map((service) => (
                <Hover key={service.id} speed={500}>
                    <div key={service.id} className='max-w-sm rounded overflow-hidden font-meidum shadow-lg flex flex-col items-center text-center  gap-4 sm:mb-8 max-sm:mb-8  transition ease-in-out delay-150 bg-slate-200 hover:scale-110 hover:bg-slate-500 duration-300  hover:text-white'>
                        {/* <img src={service.image} alt={service.title} className='w-20 h-20 m-5 '/> */}
                        <div className='w-full  bg-slate-100 flex h-40 justify-center items-center'>
                            Imagen
                        </div>
                        <h3 className='text-lg text-center p-2'>{service.title}</h3>
                        <p className='p-5 text-base'>{service.description}</p>
                    </div>
                </Hover>
            ))}
        </div>
    )
}


export default CardService
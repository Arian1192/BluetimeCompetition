import React from 'react'
import { Carousel } from 'react-carousel3'

// const dataCarousel = [
//     {
//         id: 1,
//         name: 'Mapfre',
//         url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mapfre_logo.svg/1280px-Mapfre_logo.svg.png'
//     },
//     {
//         id: 2,
//         name: 'Toyo Tires',
//         url: 'https://1000marcas.net/wp-content/uploads/2020/10/Toyo-Tires-logo.png'
//     },
//     {
//         id: 3,
//         name: 'Motul',
//         url: 'https://w7.pngwing.com/pngs/428/365/png-transparent-motul-hd-logo.png'
//     },
//     {
//         id: 4,
//         name: 'RsGrup',
//         url: 'https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/301118785_485540450248951_5692230323585460666_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6i_z8GHNAdUAX_Tocmy&_nc_ht=scontent-bcn1-1.xx&oh=00_AfCW1b8p-Xr7cHbTHrAqUrwDENCVHojAoFly77RfPPCp1g&oe=6397A66F'
//     },
//     {
//         id: 5,
//         name: 'Panta Racing Fuel',
//         url: 'https://pantaportugal.com/assets/panta/panta-logo.orig-80005e46c8ce35034f0be232bcf2551fa095bee0e3d468a2ba582d1a7a42cac4.png'
//     },
//     {
//         id: 6,
//         name: 'Wossner',
//         url: 'https://cdn.shopify.com/s/files/1/2030/3551/files/WOSSNER_LOGO_STD_-_PNG.png?v=1648821736'
//     },
//     {
//         id: 7,
//         name: 'Carrillo Cp',
//         url: 'https://getlogo.net/wp-content/uploads/2021/01/cp-carrillo-logo-vector.png'
//     },
// ]




const style = {
    width: 297,
    height: 296,
    overflow: 'hidden'
}

const Slider = () => {
    const dataCarousel = [
        {
            id: 1,
            name: 'Mapfre',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mapfre_logo.svg/1280px-Mapfre_logo.svg.png'
        },
        {
            id: 2,
            name: 'Toyo Tires',
            url: 'https://1000marcas.net/wp-content/uploads/2020/10/Toyo-Tires-logo.png'
        },
        {
            id: 3,
            name: 'Motul',
            url: 'https://w7.pngwing.com/pngs/428/365/png-transparent-motul-hd-logo.png'
        },
        {
            id: 4,
            name: 'RsGrup',
            url: 'https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/301118785_485540450248951_5692230323585460666_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6i_z8GHNAdUAX_Tocmy&_nc_ht=scontent-bcn1-1.xx&oh=00_AfCW1b8p-Xr7cHbTHrAqUrwDENCVHojAoFly77RfPPCp1g&oe=6397A66F'
        },
        {
            id: 5,
            name: 'Panta Racing Fuel',
            url: 'https://pantaportugal.com/assets/panta/panta-logo.orig-80005e46c8ce35034f0be232bcf2551fa095bee0e3d468a2ba582d1a7a42cac4.png'
        },
        {
            id: 6,
            name: 'Wossner',
            url: 'https://cdn.shopify.com/s/files/1/2030/3551/files/WOSSNER_LOGO_STD_-_PNG.png?v=1648821736'
        },
        {
            id: 7,
            name: 'Carrillo Cp',
            url: 'https://getlogo.net/wp-content/uploads/2021/01/cp-carrillo-logo-vector.png'
        },
    ]

    return (
        <div className='w-full overflow-hidden flex flex-col items-center justify-center z-[1]'>
            <div className='mb-10 flex flex-row items-center justify-center max-sm:w-full'>
                <h2 className='text-md text-slate-700 font-bold max-sm:text-[18px] '>Trabajamos con marcas reconocidas</h2>
            </div>
            <Carousel height={400} width={5100} yOrigin={60} yRadius={60} autoPlay>
                <div key={1} style={style}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mapfre_logo.svg/1280px-Mapfre_logo.svg.png' alt='imagen coche' />
                </div>
                <div key={2} style={style}>
                    <img src='https://1000marcas.net/wp-content/uploads/2020/10/Toyo-Tires-logo.png' alt='imagen coche' />
                </div>
                <div key={3} style={style}>
                    <img src='https://1000marcas.net/wp-content/uploads/2021/05/Logo-Motul.png' alt='imagen coche' />
                </div>
                <div key={4} style={style}>
                    <img src='https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/301118785_485540450248951_5692230323585460666_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6i_z8GHNAdUAX_Tocmy&_nc_ht=scontent-bcn1-1.xx&oh=00_AfCW1b8p-Xr7cHbTHrAqUrwDENCVHojAoFly77RfPPCp1g&oe=6397A66F' alt='imagen coche' width={200} />
                </div>
                <div key={5} style={style}>
                    <img src='https://pantaportugal.com/assets/panta/panta-logo.orig-80005e46c8ce35034f0be232bcf2551fa095bee0e3d468a2ba582d1a7a42cac4.png' alt='imagen coche' />
                </div>
                <div key={6} style={style}>
                    <img src='https://cdn.shopify.com/s/files/1/2030/3551/files/WOSSNER_LOGO_STD_-_PNG.png?v=1648821736' alt='imagen coche' />
                </div>
                <div key={7} style={style}>
                    <img src='https://getlogo.net/wp-content/uploads/2021/01/cp-carrillo-logo-vector.png' alt='imagen coche' />
                </div>
            </Carousel>

        </div>
    )
}

export default Slider
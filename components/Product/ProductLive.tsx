import React from 'react'
import Image from 'next/image'
import Countdown from 'react-countdown'
import dynamic from 'next/dynamic'

const DynamicCountdown = dynamic(() => 
    import('react-countdown').then((mod) => mod),
    { ssr: false }
)

const ProductLive = ({product}) => {
    const liveProductReleaseDate = Date.parse("2023-03-27T16:00:00.000-06:00")
    return (
        <div className='mb-[4rem] mt-[2rem]'>
            {/* Section Title */}
            <div className='text-center'>
                <p className='text-2xl font-semibold text-white'>{product.released === true ? 'Latest Drop' : "Upcoming Drop"}</p>
                <div className='flex justify-center px-2'>
                    <p className='max-w-[600px] text-slate-300 mt-2 mb-4'>Checkout our latest product drop. The purchase window will be available from {product.drop_start_date} - {product.drop_close_date}</p>
                </div>
            </div>
            {/* Countdown Timer */}
            <div className='text-center font-light text-slate-300 text-xl mt-2 pb-4'>
                {/* <p className='text-md text-white font-medium mb-2'>Countdown to Release</p> */}
                <DynamicCountdown date={liveProductReleaseDate}>
                    <p>Test</p>
                </DynamicCountdown>
            </div>
            {/* Live Product Container */}
            <div className='flex flex-col mb-0 bg-blue-700 rounded-lg my-4 py-8 mx-[1.6rem]'>
                
                <div className='flex flex-col w-full md:flex-row justify-center px-8 md:mx-0 rounded-lg space-y-4 md:space-y-0 md:space-x-4'>
                    <div className='flex relative w-full md:w-[30%] h-[250px] rounded-lg mx-auto bg-green-100'>
                        <Image className='object-cover rounded-lg' src={"/images/carousel/alexisnco-instapost-15.jpeg"} fill alt='example-1' />
                    </div>
                    <div className='flex flex-row relative w-full md:w-[70%] h-[250px] rounded-lg mx-auto bg-green-200'>
                        <Image className='object-cover rounded-lg' src={"/images/carousel/alexisnco-instapost-15.jpeg"} fill alt='Techwear' />
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-xl mb-2 font-semi tracking-wider text-center text-white mt-4'>{product.title}</p>
                    <p className='text-lg mb-[1rem] text-center text-slate-300 font-light'>${product.price} USD</p>
                    <div className='flex justify-center'>
                        <button disabled={product.purchase_window_open === true && product.sold_out === false ? false : product.purchase_window_open === true && product.sold_out === true ? true : true} className={`py-2 px-4 bg-yellow-400 rounded-lg text-md text-slate-700 ${product.purchase_window_open === true ? 'opacity-100' : "opacity-60 cursor-not-allowed"}`}>{product.purchase_window_open === true && product.sold_out === false ? 'BUY NOW' : product.purchase_window_open === true && product.sold_out === true ? "SOLD OUT" : product.purchase_window_open === false && product.sold_out === true && product.released === true ? "NOT AVAILABLE" : "COMING SOON"}</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductLive
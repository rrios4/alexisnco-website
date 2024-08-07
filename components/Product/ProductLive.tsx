import React, {useEffect} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { IProductContenful } from '@/interfaces/global.interface'
import formatDate from '@/lib/utils/formatDate'
import formatMoneyValue from '@/lib/utils/formatMoneyValues'
import { Button } from '../ui/button'

interface IProductLiveProps {
    product: IProductContenful;
}

// const DynamicCountdown = dynamic(() => 
//     import('react-countdown').then((mod) => mod as any),
//     { ssr: false }
// )

const DynamicCounter = dynamic(() => 
    import('@/components/Counter').then((mod) => mod.Counter as any),
    { ssr: false}
)

const ProductLive: React.FC<IProductLiveProps> = ({product} : IProductLiveProps) => {
    const liveProductReleaseDate = Date.parse("2023-03-27T16:00:00.000-06:00")
    return (
        <div className='mb-[4rem] mt-[2rem]'>
            {/* Section Title */}
            <div className='text-center'>
                <p className='text-2xl font-semibold text-white'>{product?.fields.released === true ? 'Latest Drop' :  "Upcoming Drop"}</p>
                <div className='flex justify-center px-2'>
                    <p className='max-w-[600px] text-slate-300 mt-2 mb-4'>Checkout our latest product drop. The purchase window will be available from {formatDate(product?.fields.drop_start_date)} - {formatDate(product?.fields.drop_close_date)}</p>
                </div>
            </div>
            {/* Live Product Container */}
            <div className='flex flex-col mb-0 bg-purple-800 bg-opacity-50 backdrop-blur-md rounded-lg my-4 py-8 mx-[1.6rem]'>
                
                <div className='flex flex-col w-full md:flex-row justify-center px-8 md:mx-0 rounded-lg space-y-4 md:space-y-0 md:space-x-4'>
                    <div className='flex relative w-full md:w-[30%] h-[250px] rounded-lg mx-auto bg-green-100'>
                        <Image className='object-cover rounded-lg' src={`https:${product?.fields.image_cover_url.fields.file.url}`} priority sizes='' fill alt='example-1' />
                    </div>
                    <div className='flex flex-row relative w-full md:w-[70%] h-[250px] rounded-lg mx-auto bg-green-200'>
                        <Image className='object-cover rounded-lg' src={`https:${product?.fields.product_images[0].fields.file.url}`} priority sizes='' fill alt='Techwear' />
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-xl mb-2 font-semi tracking-wider text-center text-white mt-4'>{product?.fields.title}</p>
                    <p className='text-lg mb-[1rem] text-center text-slate-300 font-light'>${formatMoneyValue(product?.fields.price)} USD</p>
                    {/* Countdown Timer */}
                    <div className='text-center font-light text-slate-300 text-xl mt-0 pb-2'>
                        {/* <p className='text-md text-white font-medium mb-2'>Countdown to Release</p> */}
                        {/* <DynamicCountdown date={liveProductReleaseDate}/> */}
                        <DynamicCounter/>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Button variant={"russia"} 
                        disabled={product?.fields.purchase_window_open === true && product?.fields.sold_out === false ? false : product?.fields.purchase_window_open === true && product?.fields.sold_out === true ? true : true} 
                        className={`${product?.fields.purchase_window_open === true ? 'opacity-100' : 'opacity-60 cursor-not-allowed'}`}>
                            {product?.fields.purchase_window_open === true && product?.fields.sold_out === false ? 'BUY NOW' : product?.fields.purchase_window_open === true && product?.fields.sold_out === true ? "SOLD OUT" : product?.fields.purchase_window_open === false && product?.fields.sold_out === true && product?.fields.released === true ? "NOT AVAILABLE" : "COMING SOON"}
                        </Button>
                        {/* <button 
                        disabled={product?.fields.purchase_window_open === true && product?.fields.sold_out === false ? false : product?.fields.purchase_window_open === true && product?.fields.sold_out === true ? true : true} 
                        className={`py-2 px-4 bg-yellow-400 rounded-lg text-md text-slate-700 ${product?.fields.purchase_window_open === true ? 'opacity-100' : "opacity-60 cursor-not-allowed"}`}>
                            {product?.fields.purchase_window_open === true && product?.fields.sold_out === false ? 'BUY NOW' : product?.fields.purchase_window_open === true && product?.fields.sold_out === true ? "SOLD OUT" : product?.fields.purchase_window_open === false && product?.fields.sold_out === true && product?.fields.released === true ? "NOT AVAILABLE" : "COMING SOON"}
                        </button> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductLive
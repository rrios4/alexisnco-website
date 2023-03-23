import React from 'react'
import Image from 'next/image'
import ProductDetailsDialog from './ProductDetailsDialog'

interface IProductArchived {
    props: React.ReactNode;
}

const ProductArchived = ({ products }) => {
    return (
        <>
            {
                products?.map((product, index) => (
                    <>
                        {/* Card 1 */}
                        {product.released === true && product.purchase_window_open === false ?
                            <>
                                <ProductDetailsDialog product={product}>
                                    <div key={index} className='p-4 m-2 hover:bg-slate-700 hover:bg-opacity-30 hover:backdrop-blur-2xl hover:p-[15px] rounded-lg cursor-pointer'>
                                        <div className='relative w-full h-[250px] rounded-lg mb-4'>
                                            <Image className='rounded-lg object-cover' src={product.img_cover_url} alt={product.alt} fill />
                                            <div className='flex flex-col justify-end w-full h-full'>
                                                <p className='absolute z-1 p-2 bg-slate-900 backdrop-blur-md rounded-bl-lg rounded-tr-lg text-sm bg-opacity-80 text-center'>${product.price}</p>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <p className='text-slate-200'>{product.title}</p>
                                            <p className='font-light text-slate-300'>{product.drop_start_date}</p>
                                        </div>
                                    </div>
                                </ProductDetailsDialog>
                            </> : <></>}
                    </>
                ))
            }
        </>
    )
}

export default ProductArchived
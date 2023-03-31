import React from 'react'
import Image from 'next/image'
import ProductDetailsDialog from './ProductDetailsDialog'
import { IProductContenful } from '@/interfaces/global.interface'
import formatMoneyValue from '@/lib/utils/formatMoneyValues';
import formatDate from '@/lib/utils/formatDate';

interface IProductArchivedProps {
    products: IProductContenful[];
}

const ProductArchived: React.FC<IProductArchivedProps> = ({ products }: IProductArchivedProps) => {
    return (
        <>
            {
                products?.map((product, index) => (
                    <ul className='' key={index}>
                        <ProductDetailsDialog product={product}>
                            <div className='p-4 m-2 hover:bg-slate-700 hover:bg-opacity-30 hover:backdrop-blur-2xl rounded-lg cursor-pointer'>
                                <div className='relative w-full h-[250px] rounded-lg mb-4'>
                                    <Image className='rounded-lg object-cover' src={`https:${product.fields.image_cover_url.fields.file.url}`} priority sizes='' alt={product.fields.alt} fill />
                                    <div className='flex flex-col justify-end w-full h-full'>
                                        <p className='absolute z-1 p-2 bg-slate-900 backdrop-blur-md rounded-bl-lg rounded-tr-lg text-sm bg-opacity-80 text-center'>${formatMoneyValue(product.fields.price)}</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <p className='text-slate-200'>{product.fields.title}</p>
                                    <p className='font-light text-slate-300'>{formatDate(product.fields.drop_start_date)}</p>
                                </div>
                            </div>
                        </ProductDetailsDialog>
                    </ul>
                ))
            }
        </>
    )
}

export default ProductArchived
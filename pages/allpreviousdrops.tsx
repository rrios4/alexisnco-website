import React from 'react'
import ProductArchived from '@/components/Product/ProductArchived'
import { ArchiveIcon } from '@radix-ui/react-icons'
import { client } from '@/lib/contentful/client'
import { IProductContenful } from '@/interfaces/global.interface'

interface IAllPreviousDrops {
  products: IProductContenful[]
}

const AllPreviousDrops = ({products}: IAllPreviousDrops) => {
  return (
    <div className='container mx-auto font-bold pt-6 pb-8 px-2 text-white'>
      <div className='flex flex-col md:flex-row w-full mb-6 mt-2'>
        <div className='mx-auto my-2 md:my-auto md:mx-4'>
          <ArchiveIcon width={25} height={25}/>
        </div>
        <p className='text-center md:text-left text-2xl tracking-wide font-medium'>All Drops</p>
      </div>
      <div className='bg-blue-700 rounded-lg overflow-scroll p-2'>
        <div className='px-3 grid grid-rows-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4'>
          <ProductArchived products={products}/>
        </div>
      </div>
    </div>
  )
}

export default AllPreviousDrops

export const getServerSideProps = async() => {
  const res = await client.getEntries({
    content_type: 'product',
    'fields.released': true,
  })
  // console.log(res.items)

  return{
    props: {
      products: res.items,
      revalidate: 60
    }
  }
}
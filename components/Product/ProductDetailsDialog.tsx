import React from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { IProductContenful } from '@/interfaces/global.interface'
import formatDate from '@/lib/utils/formatDate'
import formatMoneyValue from '@/lib/utils/formatMoneyValues'

interface IProductDetailsDialogProps {
  children: React.ReactNode;
  product: IProductContenful;
}

const ProductDetailsDialog: React.FC<IProductDetailsDialogProps> = (props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props.children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black bg-opacity-40 z-40 data-[state=open]:animate-overlayShow fixed inset-0'/>
        <Dialog.Content className='text-white z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-blue-600 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          {/* Modal Title with close button */}
          <div className='flex justify-between'>
            <div className='p-2 w-[15px] h-[15px]'>

            </div>
            <Dialog.Title className='m-0 text-[17px] font-medium text-yellow-100'>{props.product.fields.title}</Dialog.Title>
            <div className='mt-[-2px] flex justify-end my-auto'>
              <Dialog.Close asChild>
                <button className='hover:bg-black hover:bg-opacity-10 p-2 rounded-lg' aria-label='Close'><Cross1Icon/></button>
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Description className='mt-[10px] mb-5 text-[15px] leading-normal text-slate-200 text-center'>{props.product.fields.description}</Dialog.Description>
          <div>
              <div className='grid grid-cols-2 grid-rows-1 overflow-y-auto justify-center gap-4 w-full'>
                {props.product.fields.product_images?.map((item, index) => (
                    <ul key={index}>
                      <div className='relative w-full h-[150px] rounded-lg'>
                        <Image className='object-cover rounded-lg' src={`https:${item.fields.file.url}`} fill sizes='' alt={`${item.fields.title}`}/>
                      </div>
                    </ul>
                ))}
              </div>
          </div>
          <div className='mt-6'>
            <div className={`flex ${props.product.fields.sold_out === true || props.product.fields.released === true ? 'mb-4' : 'mb-0'} gap-2`}>
              {props.product.fields.sold_out === true ? 
                  <div className='px-2 py-1 bg-red-500 w-max rounded-lg border border-red-400'>
                    <p className='text-xs text-slate-200'>SOLD OUT</p>
                  </div>
              : ""
              }
              {props.product.fields.released === true ? 
                <div className='px-2 py-1 bg-yellow-500 w-max rounded-lg border border-yellow-400'>
                  <p className='text-xs text-slate-200'>ARCHIVED</p>
                </div>     
              : ""
              }

            </div>
            <div className='mb-2'>
              <p className='font-medium'>Purchase Window:</p>
              <p className='text-slate-200 font-light'>{formatDate(props.product.fields.drop_start_date)} - {formatDate(props.product.fields.drop_close_date)}</p>
            </div>
            <div className='flex gap-2 justify-end'>
              <p className='font-medium'>Price:</p>
              <p className='text-slate-200 font-light'>${formatMoneyValue(props.product.fields.price)}</p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ProductDetailsDialog
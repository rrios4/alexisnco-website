import React from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'

interface IProductDetailsDialogProps {
  children: React.ReactNode;
  product: IProduct;
}

interface IProduct {
    title: string;
    drop_start_date: string;
    drop_close_date: string;
    price: number,
    img_cover_url: string;
    description: string;
    alt: string;
    released: boolean;
    purchase_window_open: boolean;
    sold_out: boolean
    product_images: IProductImages;
}

interface IProductImages {
    img_one: string;
    img_two: string;
    img_three: string;
    img_four: string;
}

const ProductDetailsDialog: React.FC<IProductDetailsDialogProps> = (props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props.children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black bg-opacity-40 data-[state=open]:animate-overlayShow fixed inset-0'/>
        <Dialog.Content className='text-white data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-blue-600 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          {/* Modal Title with close button */}
          <div className='flex justify-between'>
            <div className='p-2 w-[15px] h-[15px]'>

            </div>
            <Dialog.Title className='m-0 text-[17px] font-medium text-yellow-100'>{props.product.title}</Dialog.Title>
            <div className='mt-[-2px] flex justify-end my-auto'>
              <Dialog.Close asChild>
                <button className='hover:bg-black hover:bg-opacity-10 p-2 rounded-lg' aria-label='Close'><Cross1Icon/></button>
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Description className='mt-[10px] mb-5 text-[15px] leading-normal text-slate-200 text-center'>{props.product.description}</Dialog.Description>
          <div>
              <div className='grid grid-cols-2 grid-rows-1 overflow-y-auto justify-center gap-4 w-full'>
                <div className='relative w-full h-[150px] rounded-lg'>
                  <Image className='object-cover rounded-lg' src={`${props.product.product_images.img_one}`} fill alt={`${props.product.alt}`}/>
                </div>
                <div className='relative w-full h-[150px] rounded-lg'>
                  <Image className='object-cover rounded-lg' src={`${props.product.product_images.img_two}`} fill alt={`${props.product.alt}`}/>
                </div>
                <div className='relative w-full h-[150px] rounded-lg'>
                  <Image className='object-cover rounded-lg' src={`${props.product.product_images.img_three}`} fill alt={`${props.product.alt}`}/>
                </div>
                <div className='relative w-full h-[150px] rounded-lg'>
                  <Image className='object-cover rounded-lg' src={`${props.product.product_images.img_four}`} fill alt={`${props.product.alt}`}/>
                </div>
              </div>
          </div>
          <div className='mt-6'>
            <div className={`flex ${props.product.sold_out === true || props.product.released === true ? 'mb-4' : 'mb-0'} gap-2`}>
              {props.product.sold_out === true ? 
                  <div className='px-2 py-1 bg-red-500 w-max rounded-lg border border-red-400'>
                    <p className='text-xs text-slate-200'>SOLD OUT</p>
                  </div>
              : ""
              }
              {props.product.released === true ? 
                <div className='px-2 py-1 bg-yellow-500 w-max rounded-lg border border-yellow-400'>
                  <p className='text-xs text-slate-200'>ARCHIVED</p>
                </div>     
              : ""
              }

            </div>
            <div className='mb-2'>
              <p className='font-medium'>Purchase Window:</p>
              <p className='text-slate-200 font-light'>{props.product.drop_start_date} - {props.product.drop_close_date}</p>
            </div>
            <div className='flex gap-2 justify-end'>
              <p className='font-medium'>Price:</p>
              <p className='text-slate-200 font-light'>${props.product.price}</p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ProductDetailsDialog
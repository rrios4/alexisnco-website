import React, { useState, useEffect } from 'react'
import * as Toast from '@radix-ui/react-toast';
import { Cross1Icon } from '@radix-ui/react-icons'

type Props = {
  children: React.ReactNode;
  open?: boolean;
  timerRef?: any;
  setOpen?: any;
  msg: string;
}

const ToastRadix = (props: Props) => {
  let { open, setOpen, msg } = props
  // const [open, setOpen] = useState(true);
  // const timerRef = React.useRef(0);

  // useEffect(() => {
  //   return () => clearTimeout(timerRef.current)
  // }, [])  

  return (
    <Toast.Provider swipeDirection='up'>
      {props.children}
      <Toast.Root open={open} onOpenChange={setOpen} className="bg-blue-500 bg-opacity-60 backdrop-blur-lg rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut">
        <div className='flex flex-col'>
          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px] text-white">Subscribed to our newsletter successfully 🎉</Toast.Title>
          <Toast.Description asChild>
            <p className='text-sm text-slate-200'> <span className='text-yellow-400'>{msg}</span></p>
          </Toast.Description>
        </div>
        <Toast.Close >
          <button onClick={() => setOpen(false)}><Cross1Icon/></button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className='[--viewport-padding:_25px] fixed top-0 inset-x-0 mx-auto flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
    </Toast.Provider>
  )
}

export default ToastRadix
import React from 'react'
import * as Toast from '@radix-ui/react-toast';

type Props = {
  children: React.ReactNode;
}

const ToastRadix = (props: Props) => {
  return (
    <Toast.Provider swipeDirection='right'>
      {props.children}
      <Toast.Root>
        <Toast.Title>Suscribed to our newsletter</Toast.Title>
        <Toast.Description asChild>Your email has been subscribed to our news letter succesfully! 🎉</Toast.Description>
        <Toast.Action asChild altText=''/>
        <Toast.Close/>
      </Toast.Root>
      <Toast.Viewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none'/>
    </Toast.Provider>
  )
}

export default ToastRadix
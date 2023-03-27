import React, { useState, useEffect } from 'react'
import jsonp from 'jsonp'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import ToastRadix from '../ui/ToastRadix'

const SubscribeNewsletter = () => {
  const [open, setOpen] = useState(false);
  const timerRef = React.useRef(0);

  // React Input useStates
  const [emailInput, setEmailInput] = useState('');
  // React res msg useState
  const [responseMsg, setResponseMsg] = useState('')

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])  

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    e.preventDefault();
    timerRef.current = window.setTimeout(() => {
      const url = 'https://alexisncompany.us18.list-manage.com/subscribe/post-json?u=14a334f31cbe699b8a835baf6&amp;id=8199ea6bd0&amp;f_id=00993ee7f0';
      jsonp(`${url}&EMAIL=${emailInput}`, { param: 'c' }, (_, data) => {
          const { msg, result } = data
          // do something with response
          // alert(msg);
          setResponseMsg(msg)
      });
      setOpen(true);
    }, 100);
    setEmailInput('')
  }

  return (
    <ToastRadix open={open} setOpen={setOpen} timerRef={timerRef} msg={responseMsg}>
      <div className='flex space-x-4 md:my-auto justify-center'>
        <form className='flex space-x-4' method='POST' onSubmit={handleSubmit}>
          <input required className='max-w-[400px] bg-blue-200 text-white bg-opacity-20 rounded-full py-1 px-4' type='email' id='email' placeholder={'Enter email address'} onChange={(e) => setEmailInput(e.target.value)} value={emailInput}/>
          <div className='flex justify-center my-auto'>
              <button type='submit' className="flex bg-yellow-300 hover:bg-yellow-400 text-black rounded-full p-2 transition ease-in-out duration-200 hover:-translate-y-1 ">
                  <PaperPlaneIcon />
              </button>
          </div>
        </form>
      </div>
    </ToastRadix>
  )
}

export default SubscribeNewsletter
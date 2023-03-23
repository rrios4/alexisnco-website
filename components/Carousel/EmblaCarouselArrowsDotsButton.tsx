import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props

  return (
    <button
      className={'flex items-center ml-[0.75rem] mr-[0.75rem] w-[2rem] h-1 bg-slate-300'.concat(selected ? ' bg-gradient-to-r from-yellow-300 to-yellow-500' : '')}
      type="button"
      onClick={onClick}
    />
  )
}

type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className="relative text-white items-center justify-center flex cursor-pointer w-[2rem] h-[2rem]"
      onClick={onClick}
      disabled={!enabled}
    >
      {/* <svg className="w-[65%] h-[65%]" viewBox="137.718 -1.001 366.563 644">
        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
      </svg> */}
      <ChevronLeftIcon width={30} height={30}/>
    </button>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props

  return (
    <button
      className="relative justify-center items-center flex cursor-pointer w-[2rem] h-[2rem]"
      onClick={onClick}
      disabled={!enabled}
    >
      {/* <svg className="w-[65%] h-[65%]" viewBox="0 0 238.003 238.003">
        <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
      </svg> */}
      <ChevronRightIcon height={30} width={30} className='text-white'/>
    </button>
  )
}

import React from 'react'
import { Spinner } from './ui/spinner'

const LoadingPage = () => {
  return (
    <div className='flex w-full h-full justify-center items-center'>
      <div className='flex w-fit h-fit p-6 rounded-2xl bg-linear-to-br from-white/10 to-black/10 shadow-xl border-white/20  text-white'>
        <Spinner className='w-8 h-8'/>
      </div>
    </div>
  )
}

export default LoadingPage

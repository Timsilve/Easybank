import React from 'react'
import { choice } from '../data/choice'

const Choice = () => {
  return (
    <div className='mt-56  py-16 px-8 md:px-16 bg-[#f3f4f6] text-center sm:text-start' >
      <div className='md:w-[55%] my-12'>
        <h2 className='text-3xl py-4'>Why choose Easybank?</h2>
        <p className='text-xl text-gray-500'> We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
        {choice.map((data, id) => {
          return <div className='flex flex-col items-center md:items-start' key={id}>
            <img src={data.img} alt="" />
            <h3 className='text-2xl py-4'>{data.title}</h3>
            <p className='text-[1.1rem] text-gray-500'>{data.text}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Choice
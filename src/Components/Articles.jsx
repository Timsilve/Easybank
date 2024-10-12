import React from 'react'
import { article } from '../data/articles'

const Articles = () => {
    return (
        <div className=' px-4 md:px-16 py-10 bg-[#fafafa]'>
            <h2 className='my-8 text-3xl'>
                Latest Articles
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'>
                {article.map((text, id) => {
                    return <div key={id} className='bg-white rounded-[0.5rem]'>
                        <img src={text.img} alt="" className='md:h-[192px] rounded-t-[0.5rem] w-full' />
                        <div className='px-4 py-2'><h4 className='text-gray-500 text-[12px] mx-4'>{text.name}</h4>
                            <h3 className='text-[1.3rem] py-2'>{text.title}</h3>
                            <p className='text-gray-500 text-[13px]'>{text.paragraph}</p></div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default Articles
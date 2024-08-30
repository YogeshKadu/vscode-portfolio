import React from 'react'

function Myservices() {
    return (
        <div className='p-5 mx-auto max-w-7xl'>
            <h2 className='mb-12 text-3xl font-semibold'>My <span className='underline underline-offset-4 text-info'>Services</span></h2>
            <div className='flex flex-wrap justify-center gap-12'>
                <div className='flex-[300px] flex flex-col '>
                    <h3 className='mb-3 text-2xl font-semibold text-center'>Web Development</h3>
                    <p className='text-center text-pretty'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sint esse.</p>
                </div>
                <div className='flex-[300px] flex flex-col '>
                    <h3 className='mb-3 text-2xl font-semibold text-center'>Application development</h3>
                    <p className='text-center text-pretty'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sint esse.</p>
                </div>
                <div className='flex-[300px] flex flex-col '>
                    <h3 className='mb-3 text-2xl font-semibold text-center'>Game Development</h3>
                    <p className='text-center text-pretty'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sint esse.</p>
                </div>
            </div>
        </div>
    )
}

export default Myservices
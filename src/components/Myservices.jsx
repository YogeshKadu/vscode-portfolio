import React from 'react'

function Myservices() {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h2 className='font-semibold text-3xl mb-12'>My <span className='underline underline-offset-4 text-info'>Services</span></h2>
            <div className='flex flex-wrap justify-center gap-12'>
                <div className='flex-[300px] flex flex-col '>
                    <h3 className='text-center font-semibold text-2xl mb-3'>Web Development</h3>
                    <p className='text-pretty text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sint esse.</p>
                </div>
                <div className='flex-[300px] flex flex-col '>
                    <h3 className='text-center font-semibold text-2xl mb-3'>Application development</h3>
                    <p className='text-pretty text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sint esse.</p>
                </div>
                <div className='flex-[300px] flex flex-col '>
                    <h3 className='text-center font-semibold text-2xl mb-3'>Game Development</h3>
                    <p className='text-pretty text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sint esse.</p>
                </div>
            </div>
        </div>
    )
}

export default Myservices
import React from 'react';
import Image from "../assets/img2.jpg";

function Herosection() {
    return (
        <div className='min-h-96 flex items-center justify-center gap-20 flex-wrap mb-10'>
            <div className='rounded-full mt-20 sm:mt-0 aspect-square w-56 relative grid place-content-center'>
                <div className='rounded-full aspect-square w-full overflow-hidden absolute border-8 border-neutral shadow-xl z-30'>
                    <img src={Image} alt="" className="object-[-20px_40px] scale-[2.2]" />
                </div>
                <span className='block border-2 border-neutral-content duration-700 w-40 aspect-square animate-ping rounded-full z-20'></span>
            </div>
            <div className='max-w-96'>
                <button className='btn btn-xs btn-neutral mb-5'>Frontend-developer</button>
                <h1 className='font-semibold text-4xl mb-3 text-pretty'>Yogesh Vasant Kadu</h1>
                <p className='mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eos. Aut neque cumque iste quo, fuga vel ducimus saepe unde pariatur earum .</p>
                <div className='flex gap-3'>
                    <button className='btn px-4 btn-info btn-sm rounded-full hover:btn-outline'>Download CV</button>
                    <button className='btn px-4 btn-outline btn-sm rounded-full btn-accent'>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Herosection
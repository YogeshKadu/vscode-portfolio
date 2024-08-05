import React, { useState } from 'react'

function Footer() {
    const [count, setCount] = useState(95);
    return (
        <div className='flex -justify-end w-full bg-slate-800 text-gray-400 h-5 text-[0.6rem]'>
            <button className="w-10 bg-yellow-300 text-slate-800 font-bold">
                <span className="-font-Noto">{count % 10 === 0 ? '⚆_⚆' : '0o0'}</span>
            </button>

            <button className='custom-outline h-full group flex gap-1 items-center px-1.5' onClick={() => setCount(pre => pre + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 group-active:scale-75 group-hover:text-red-500 transition-all' width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.171a4 4 0 1 1 5.656 5.656L10 17.657l-6.828-6.829a4 4 0 0 1 0-5.656" clipRule="evenodd"></path></svg>
                {count}
            </button>
        </div>
    )
}

export default Footer
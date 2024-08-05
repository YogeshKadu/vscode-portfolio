import React from 'react'
import Navigation from './Top/Navigation';
import { Link } from 'react-router-dom';

function Topmenu() {
    return (
        <div className='flex w-full h-9 flex-shrink-0 items-center gap-0.5 bg-slate-800 text-gray-300 text-xs'>
            <Link to="/" className='px-2 custom-outline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="#0065a9" d="m29.01 5.03l-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575"></path><path fill="#007acc" d="m29.01 26.97l-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57"></path><path fill="#1f9cf0" d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724a1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576Z"></path></svg>
            </Link>
            <Navigation />
            <div className='w-full max-w-xs py-1 mx-auto text-center border rounded-md xs:inline-block bg-slate-700 border-slate-600'>
                <span className='hidden sm:inline'>YogeshKadu  -</span> 0o0 <span className='hidden sm:inline'>- vscode</span>
            </div>
            <button className='h-full aspect-square grid-center custom-outline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M3 14a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></path></svg>
            </button>
            <button className='h-full aspect-square grid-center custom-outline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path></svg>
            </button>
            <button className='h-full aspect-square grid-center custom-outline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"></path></svg>
            </button>
            {/* </div> */}
        </div>
    )
}

export default Topmenu;
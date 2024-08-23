import React from 'react'
import Navigation from './Top/Navigation';
import { Link } from 'react-router-dom';
const NewTwitterIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
        <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const Facebook01Icon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props} fill='#fff'>
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
    </svg>

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    //     <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    //     <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    // </svg>

);
const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props} fill='#fff'>
  {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
</svg>

//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props} fill="#fff">
//   {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
//   <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
// </svg>

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    //     <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    // </svg>
);

function Topmenu() {
    return (
        <div className='flex w-full h-9 flex-shrink-0 items-center gap-0.5 bg-slate-800 text-gray-300 text-xs'>
            <Link to="/" className='px-2 py-2 custom-outline'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="#0065a9" d="m29.01 5.03l-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575"></path><path fill="#007acc" d="m29.01 26.97l-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57"></path><path fill="#1f9cf0" d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724a1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576Z"></path></svg>
            </Link>
            <Navigation />
            <div className='w-full max-w-xs py-1 mx-auto text-center border rounded-md xs:inline-block bg-slate-700 border-slate-600'>
                <span className='hidden sm:inline'>YogeshKadu  -</span> 0o0 <span className='hidden sm:inline'>- vscode</span>
            </div>
            <Link className='h-full aspect-square grid-center custom-outline' to={"https://www.instagram.com/bitloader0o0/"} target="_blank">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M3 14a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></path></svg> */}
                <InstagramIcon className="w-5 h-5 text-white" />
            </Link>
            <Link className='h-full aspect-square grid-center custom-outline' to={"https://www.facebook.com/yogesh.kadu.7967/"} target="_blank">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path></svg> */}
                <Facebook01Icon className="w-5 h-5 text-white" />
            </Link>
            <Link className='h-full aspect-square grid-center custom-outline' to={"https://x.com/YogeshKadu5"} target="_blank">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"></path></svg> */}
                <NewTwitterIcon className="w-4 h-4 text-white" />
            </Link>
            {/* </div> */}
        </div>
    )
}

export default Topmenu;
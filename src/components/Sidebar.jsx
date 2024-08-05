import React from 'react';
import { Tab } from '@headlessui/react';
import Explorer from './Explorer';


function Sidebar() {
    return (
        <div className='relative flex h-full text-gray-500 border-r divide-x border-slate-900 bg-slate-800 divide-slate-900'>
            <Tab.Group vertical>
                <Tab.List as={"div"} className={"flex flex-col w-10 bg-slate-700/20"}>
                    <Tab className={"custom-outline w-full aspect-[7/8] grid place-content-center relative"}>
                        {({ selected }) => (
                            <>
                                <span className={`${selected && 'w-0.5'} absolute w-0 bg-amber-300 h-full`}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>
                            </>
                        )}
                    </Tab>
                    <Tab className={"custom-outline w-full aspect-[7/8] grid place-content-center relative"}>
                        {({ selected }) => (
                            <>
                                <span className={`${selected && 'w-0.5'} absolute w-0 bg-amber-300 h-full`}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </>
                        )}
                    </Tab>
                    <Tab className={"custom-outline w-full aspect-[7/8] grid place-content-center relative"}>
                        {({ selected }) => (
                            <>
                                <span className={`${selected && 'w-0.5'} absolute w-0 bg-amber-300 h-full`}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="m10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5L0 14.56l1.72 1.72l-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94L1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24L12 22.94L10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5m3 6a3.33 3.33 0 0 1-3 3a3.33 3.33 0 0 1-3-3v-2.25h6zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0z"></path></svg>
                            </>
                        )}
                    </Tab>
                </Tab.List>
                <Tab.Panels className={"flex-1 hidden md:block overflow-hidden w-60 h-full absolute sm:relative left-10 sm:left-0 bg-slate-800 z-[999] top-0"}>
                    <Tab.Panel className={"w-full"}>
                        <Explorer />
                    </Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Sidebar;
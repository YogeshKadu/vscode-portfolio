import React from 'react';
import { Popover, Tab } from '@headlessui/react';
import Explorer from './Explorer';
import { Link } from 'react-router-dom';


const ExplorerButton = () => {
    return (<Popover className="relative">
        <Popover.Button as="button" className={"custom-outline w-full aspect-[7/8] grid place-content-center relative border-b border-secondary-900"}>
            <span className={`absolute w-0 bg-amber-300 h-full`}></span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
        </Popover.Button>
        <Popover.Panel className="absolute top-0 z-10 left-10 w-60 max-w-[calc(100vw_-_5rem)] bg-secondary-800 h-[calc(100vh_-_3.55rem)] border-r border-secondary-900 box-content">
            <Explorer />
        </Popover.Panel>
    </Popover>)
}


const BottomButtons = () => {
    return <div className="mt-auto">
        <Link to="settings" className="grid w-full border-t aspect-square place-content-center hover:bg-secondary-700 border-secondary-700">
            <div className="sr-only">Settings</div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z"></path><path d="m12 21l-9-6l9-6l9 6z"></path></g></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

        </Link>
        <Link to="https://codepen.io/yogeshkadu" target="_blank" className="grid w-full border-t aspect-square place-content-center hover:bg-secondary-700 border-secondary-700">
            <div className="sr-only">Codepen profile</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z"></path><path d="m12 21l-9-6l9-6l9 6z"></path></g></svg>
        </Link>
        <Link to="https://github.com/YogeshKadu" target="_blank" className="grid w-full border-t aspect-square place-content-center hover:bg-secondary-700 border-secondary-700">
            <div className="sr-only">Github profile</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12m-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07m1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09M11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.2 3.2 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.6 2.6 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4M7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01m-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0m1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07"></path></svg>
        </Link>
    </div>
}

function Sidebar() {
    return (
        <div className='relative flex h-full text-secondary-300'>
            <div className="hidden border-r divide-x md:flex border-secondary-900 bg-secondary-800 divide-secondary-900">
                <Tab.Group vertical>
                    <Tab.List as={"div"} className={"flex flex-col w-10 bg-secondary-700/20"}>
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
                        <BottomButtons />
                    </Tab.List>
                    <Tab.Panels className={"flex-1 z-10 md:block overflow-hidden w-60 h-full absolute md:relative left-10 sm:left-0 bg-secondary-800 top-0"}>
                        <Tab.Panel className={"w-full"}>
                            <Explorer />
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className="flex flex-col w-10 border-r divide-x md:hidden border-secondary-900 bg-secondary-800 divide-secondary-900 ">
                <ExplorerButton />
                <BottomButtons />
            </div>
        </div>
    )
}

export default Sidebar;
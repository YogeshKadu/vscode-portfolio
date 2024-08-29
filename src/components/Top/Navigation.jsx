import React from 'react';
import { Menu } from '@headlessui/react';
import folder from "../../assets/folder.json"
import { Link } from 'react-router-dom';

function Navigation() {
    const navigation = [
        { id: 1, title: "File", children: [] },
        { id: 2, title: "Edit", children: [] },
        { id: 3, title: "Section", children: [] },
        { id: 4, title: "View", children: [] },
        { id: 5, title: "Go", children: [] },
        { id: 6, title: "Run", children: [] },
        { id: 7, title: "Terminal", children: [] },
        { id: 8, title: "Help", children: [] }
    ]
    const navigations = folder.items.find(item => item.name == "src").items;
    return (
        <>
            <nav className='hidden md:flex gap-0.5 overflow-clip'>
                <p className='custom-outline rounded py-0.5 px-2'>File</p>
                <p className='custom-outline rounded py-0.5 px-2'>Edit</p>
                <p className='custom-outline rounded py-0.5 px-2'>Section</p>
                <p className='custom-outline rounded py-0.5 px-2'>View</p>
                <p className='custom-outline rounded py-0.5 px-2'>Go</p>
                <p className='custom-outline rounded py-0.5 px-2'>Run</p>
                <p className='custom-outline rounded py-0.5 px-2'>Terminal</p>
                <p className='custom-outline rounded py-0.5 px-2'>Help</p>
            </nav>
            <span className='h-full md:hidden aspect-square'>
                <Menu>
                    <Menu.Button className={"aspect-square h-full grid place-content-center custom-outline"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
                    </Menu.Button>
                    <Menu.Items className={"absolute flex flex-col w-56 max-w-[calc(100vw_-_2.25rem)] bg-secondary-700 custom-shadow p-1 rounded z-30"}>
                        {
                            navigations.map((menuItem) => <Menu.Item key={menuItem.name}>
                                {({ active }) => (
                                    <Link to={menuItem.href} className={`${active && 'bg-secondary-600'} flex items-center h-6 rounded-sm`}>
                                        <span className='h-full aspect-square grid-center'></span>
                                        <span className='flex-1 text-left capitalize'>
                                            {menuItem.name.split(".")[0]}
                                        </span>
                                        <span className='h-full aspect-square grid-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m19 12l12 12l-12 12"></path></svg>
                                        </span>
                                        {/* <span className='h-full aspect-[2/3] grid-center'></span> */}
                                    </Link>
                                )}
                            </Menu.Item>)
                            // navigation.map((menuItem) => <Menu.Item key={menuItem.id}>
                            //     {({ active }) => (
                            //         <button className={`${active && 'bg-secondary-600'} flex items-center h-6 rounded-sm`}>
                            //             <span className='h-full aspect-square grid-center'></span>
                            //             <span className='flex-1 text-left'>
                            //                 {menuItem.title}
                            //             </span>
                            //             <span className='h-full aspect-square grid-center'>
                            //                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m19 12l12 12l-12 12"></path></svg>
                            //             </span>
                            //             <span className='h-full aspect-[2/3] grid-center'></span>
                            //         </button>
                            //     )}
                            // </Menu.Item>)
                        }
                    </Menu.Items>
                </Menu>
            </span>
        </>
    )
}

export default Navigation
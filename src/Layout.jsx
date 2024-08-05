import React from 'react'
import Topmenu from "./components/Topmenu";
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MarkdownEditor from './pages/Markdown/MarkdownEditor';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';

function Layout() {
    const location = useLocation();
    const { hash, pathname, search } = location;
    // const path = useRoutes();
    return (
        <div className="relative flex flex-col w-full divide-y h-dvh min-h-lvh bg-slate-800/95 font-Quicksand divide-slate-900" data-theme="dark">
            <Topmenu />
            <div className='flex flex-col flex-1 divide-y divide-slate-900'>
                <div className='flex-1 h-full max-h-[calc(100vh_-_3.25rem)]'>
                    {/* below is the content you can edit */}
                    <div className="flex h-full max-h-full overflow-auto">
                        <Sidebar />
                        <div className="relative flex flex-col flex-1 font-sans divide-y divide-slate-900">
                            <div className="top-0 flex w-full h-8 divide-x bg-slate-800 divide-slate-900">
                                <div className="flex items-center w-56 px-2 text-gray-300 border-r bg-slate-800 border-slate-900">
                                    <div className='w-5 h-5'>

                                    </div>
                                    <p className="flex-1 text-xs capitalize truncate sm:text-sm">
                                        {pathname.split('/')[1]||'profile'}.jsx
                                    </p>
                                    <button className="grid w-5 h-5 rounded hover:bg-slate-700 place-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M6.793 6.793a1 1 0 0 1 1.414 0L12 10.586l3.793-3.793a1 1 0 1 1 1.414 1.414L13.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414L12 13.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L10.586 12L6.793 8.207a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>

                            </div>
                            <div className="overflow-auto grow shrink-0 basis-0 scrollbar scrollbar-thumb-slate-600">
                                <Outlet />
                            </div>
                        </div>
                        {/* <MarkdownEditor /> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default Layout
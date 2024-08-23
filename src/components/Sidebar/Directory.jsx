import React, { useState } from 'react';
import icons from '../../utils/icons';
import { NavLink } from 'react-router-dom';


function Directory({ file }) {
    const [open, setOpen] = useState(file.active || false);
    if (file.type !== 'folder')
        return (
            <>
                {!file.href ?
                    <div className="flex items-center w-full gap-1 p-1 font-sans text-left hover:bg-slate-700/20">
                        <span className="grid w-6 h-6 place-content-center">
                            <img src={icons[file.type]} alt="file-icons" className="w-3 h-3" />
                        </span>
                        <span className="flex-1 text-sm first-letter:uppercase">
                            {file.name}
                        </span>
                    </div> :
                    <NavLink to={file.href || ""} className={({ isActive }) => `flex items-center w-full gap-1 p-1 font-sans text-left hover:bg-slate-600/20 ${isActive && 'bg-slate-700 text-white'}`}>
                        <span className="grid w-6 h-6 place-content-center">
                            <img src={icons[file.type]} alt="file-icons" className="w-3 h-3" />
                        </span>
                        <span className="flex-1 text-sm first-letter:uppercase">
                            {file.name}
                        </span>
                    </NavLink>}
            </>
        )
    return <div className="outline-none">
        <button className="flex items-center w-full gap-1 p-1 font-sans text-left hover:bg-slate-600/20" onClick={() => setOpen(pre => !pre)}>
            <span className="grid w-5 h-5 place-content-center -bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${open && 'rotate-90'}`} width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" /></svg>
            </span>
            <span className="flex-1 text-sm truncate first-letter:uppercase">{file.name}</span>
        </button>
        <div className="pl-5">
            {
                open && file?.items.map((item, index) => <Directory key={index} file={item} />)
            }
        </div>
    </div>
}

export default Directory
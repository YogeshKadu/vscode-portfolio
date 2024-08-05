import React from 'react';
import Directory from './Sidebar/Directory';
import files from "../assets/folder.json";

function Explorer() {
    return (
        <>
            <Directory file={files} />
        </>
    )
}

export default Explorer
import { useState } from "react"
import useKeyCombination from "../hooks/useKeyCombination";
import { Link, useNavigate } from "react-router-dom";
import navigation from "../utils/navigations.json";

function ListFiles() {
    const [activePopover, setActivePopover] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate()
    const result = query == "" ? [] : navigation.filter((item) => JSON.stringify(item).includes(query))

    useKeyCombination(() => setActivePopover(pre => !pre), () => setActivePopover(false), "p", true);

    const HandleChange = e => setQuery(e.target.value);
    const HandleSubmit = e => {
        e.preventDefault();
        if (result.length == 1) {
            navigate(result[0].href);
            setActivePopover(false);
        }
        // console.log(result.length);
    }


    if (!activePopover)
        return null

    return (
        // <div className="fixed z-30 w-full max-w-lg -translate-x-1/2 bg-red-300 top-6 left-1/2">
        <div className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full #bg-secondary-800">
            <div className="absolute z-0 w-full h-full" onClick={() => setActivePopover(false)}></div>
            <div className="relative w-full max-w-lg mx-auto top-5">
                <div className="flex flex-col w-full gap-2 p-1.5 rounded shadow-secondary-950 bg-secondary-800 shadow-[0px_0px_20px]">
                    <form onSubmit={HandleSubmit}>
                        <input type="text" name="query" value={query} onChange={HandleChange} className="w-full px-2 text-sm bg-transparent border rounded outline-none font- h-7 text-secondary-300 placeholder:text-secondary-500 border-secondary-600 focus:ring-1 ring-primary-400" placeholder="Search file ..." autoFocus={true} />
                    </form>
                    {
                        query != "" &&
                        <div className="flex flex-col gap-1 text-xs">
                            {
                                result.map((item, index) => <Link to={item.href} key={item.href} tabIndex={index + 1} className="flex items-center h-6 px-2 rounded hover:bg-secondary-700 text-secondary-300">{item.name}</Link>)
                            }
                        </div>
                    }
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ListFiles

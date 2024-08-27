import folder from "../assets/folder.json";

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const HistoryContext = createContext(null);

function HistoryContextProvider({ children }) {
    const navigate = useNavigate();
    const src = folder.items.find((item) => item.name == "src");
    const location = useLocation();
    // const { hash, pathname, search } = location;
    const [visitedRoutes, setVisitedRoutes] = useState([])
    const RemoveRoute = (RouteHref) => {
        const cloned = [...visitedRoutes.filter((item) => item.href != RouteHref)]
        console.log(cloned);
        if(location.pathname == RouteHref){
            navigate(cloned[0]?.href||"/");
        }
        setVisitedRoutes(cloned);
        if(cloned.length == 0)
            navigate("instruction");
    }
    // const PopRoute = () => { }
    const pushRoute = (route) => setVisitedRoutes(preRoute => [...preRoute, route]);
    useEffect(() => {
        if (location.pathname != "/instruction") {
            const copy = src.items.find((item) => item.href == location.pathname);
            const exist = visitedRoutes.find((item) => item.href == location.pathname);
            if (!exist) {
                pushRoute({ ...copy, 'id': location.key });
            }
        }
    }, [location])




    return (
        <HistoryContext.Provider value={{ visitedRoutes, RemoveRoute }}>{children}</HistoryContext.Provider>
    )
}

export default HistoryContextProvider;

export const useHistoryContext = () => {
    const context = useContext(HistoryContext);
    if (!context)
        throw Error("SpotifyContext must be used within provier");
    return context;

}
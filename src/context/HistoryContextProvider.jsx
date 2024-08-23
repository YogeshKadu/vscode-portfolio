import folder from "../assets/folder.json";

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigation } from 'react-router-dom';

const HistoryContext = createContext(null);

function HistoryContextProvider({ children }) {
    const src = folder.items.find((item) => item.name == "src");
    const location = useLocation();
    // const { hash, pathname, search } = location;
    const [visitedRoutes, setVisitedRoutes] = useState([])
    const RemoveRoute = (RouteHref) => {
        const index = visitedRoutes.findIndex((item) => item.href == RouteHref);
        console.log("index", index);
        if (index != -1) {
            const clonedVisited = [...visitedRoutes];
            const sliced = clonedVisited.slice()
            console.log("sliced and cloned", sliced, clonedVisited.slice(index, 1));
            setVisitedRoutes(clonedVisited);
        }
    }
    // const PopRoute = () => { }
    const pushRoute = (route) => setVisitedRoutes(preRoute => [...preRoute, route]);
    useEffect(() => {
        const copy = src.items.find((item) => item.href == location.pathname);
        const exist = visitedRoutes.find((item) => item.href == location.pathname);
        console.log("useEffect", location, exist, visitedRoutes);

        if (!exist) {
            pushRoute({ ...copy, 'id': location.key });
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
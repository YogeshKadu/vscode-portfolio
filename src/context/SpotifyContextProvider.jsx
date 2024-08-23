import axios from 'axios';
import folder from "../assets/folder.json";

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigation } from 'react-router-dom';
const SpotifyContext = createContext(null);

function SpotifyContextProvider({ children }) {
    // const src = folder.items.find((item) => item.name == "src");
    // const location = useLocation();
    // // const { hash, pathname, search } = location;
    // const [visitedRoutes, setVisitedRoutes] = useState([])
    // const RemoveRoute = (RouteHref) => {
    //     const index = visitedRoutes.findIndex((item) => item.href == RouteHref);
    //     console.log("index", index);
    //     if (index != -1) {
    //         const clonedVisited = [...visitedRoutes];
    //         const sliced = clonedVisited.slice()
    //         console.log("sliced and cloned" , sliced,clonedVisited.slice(index, 1));
    //         setVisitedRoutes(clonedVisited);
    //     }
    // }
    // // const PopRoute = () => { }
    // const pushRoute = (route) => setVisitedRoutes(preRoute => [...preRoute, route]);
    // useEffect(() => {
    //     const copy = src.items.find((item) => item.href == location.pathname);
    //     const exist = visitedRoutes.find((item) => item.href == location.pathname);
    //     console.log("useEffect", location, exist, visitedRoutes);

    //     if (!exist) {
    //         pushRoute({ ...copy, 'id': location.key });
    //     }
    // }, [location])

    return <SpotifyContext.Provider value={{ }}>{children}</SpotifyContext.Provider>
}

export default SpotifyContextProvider;

export const useSpotifyContext = () => {
    const context = useContext(SpotifyContext);
    if (!context)
        throw Error("SpotifyContext must be used within provier");
    return context;
}
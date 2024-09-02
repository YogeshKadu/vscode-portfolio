import navigations from "../utils/navigations.json";

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const HistoryContext = createContext(null);

const skipRoutes = ["/instruction"]

function HistoryContextProvider({ children }) {
    const navigate = useNavigate();
    const { key, pathname } = useLocation();
    const [visitedRoutes, setVisitedRoutes] = useState([])
    const [activeTabs, setActiveTabs] = useState([])
    const RemoveRoute = (RouteHref) => {
        const cloned = [...activeTabs.filter((item) => item.href != RouteHref)]
        if (pathname == RouteHref) {
            navigate(cloned[0]?.href || "/");
        }
        setActiveTabs(cloned);
        if (cloned.length == 0)
            navigate("instruction");
    }
    const pushVisitedRoute = (route) => setVisitedRoutes(preRoute => [...preRoute, route]);
    const pushActiveRoute = (route) => setActiveTabs(preRoute => [...preRoute, route]);


    // all problem starts here removed strictmode as a temperory solution
    useEffect(() => {
        // console.log("visitedRoutes",visitedRoutes);
        if (!skipRoutes.includes(pathname)) {
            const copy = navigations.find((item) => item.href == pathname);
            if (!copy)
                return;
            const visitedExist = visitedRoutes.find((item) => item.href == pathname);
            const activeExist = activeTabs.find((item) => item.href == pathname);
            if(!visitedExist){
                pushVisitedRoute({...copy,id:key});
            }
            if(!activeExist){
                pushActiveRoute({...copy,id:key});
            }

            // const exist = activeTabs.find((item) => item.href == pathname);
            // if (!exist) {
            //     pushRoute({ ...copy, 'id': key });
            // }
        }
    }, [pathname])




    return (
        <HistoryContext.Provider value={{ visitedRoutes, activeTabs, RemoveRoute }}>{children}</HistoryContext.Provider>
    )
}

export default HistoryContextProvider;

export const useHistoryContext = () => {
    const context = useContext(HistoryContext);
    if (!context)
        throw Error("SpotifyContext must be used within provier");
    return context;

}
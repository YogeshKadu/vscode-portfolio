import navigations from "../utils/navigations.json";

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const HistoryContext = createContext(null);

const skipRoutes = ["/instruction"]

function HistoryContextProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [visitedRoutes, setVisitedRoutes] = useState([])
    const RemoveRoute = (RouteHref) => {
        const cloned = [...visitedRoutes.filter((item) => item.href != RouteHref)]
        if(location.pathname == RouteHref){
            navigate(cloned[0]?.href||"/");
        }
        setVisitedRoutes(cloned);
        if(cloned.length == 0)
            navigate("instruction");
    }
    const pushRoute = (route) => setVisitedRoutes(preRoute => [...preRoute, route]);


    // all problem starts here removed strictmode as a temperory solution
    useEffect(() => {
        // console.log("visitedRoutes",visitedRoutes);
        if (!skipRoutes.includes(location.pathname)) {
            const copy = navigations.find((item) => item.href == location.pathname);
            if(!copy)
                return;
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
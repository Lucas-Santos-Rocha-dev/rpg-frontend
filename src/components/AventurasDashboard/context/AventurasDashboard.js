import React, {createContext, useMemo, useState} from "react";

const initialStateDashboard = {
    id_aventura: null,
}

export const AventurasDashboardContext = createContext({
    stateDashboard: initialStateDashboard,
    setStateDashboard: () => {},
});

export const AventurasDashboardProvider = ({children}) => {
    const [stateDashboard, setStateDashboard] = useState(initialStateDashboard);

    const contextValue = useMemo(() => {
        return {
            initialStateDashboard,
            stateDashboard,
            setStateDashboard
        };
    }, [stateDashboard]);

    return (
        <AventurasDashboardContext.Provider value={contextValue}>
            {children}
        </AventurasDashboardContext.Provider>
    )
}
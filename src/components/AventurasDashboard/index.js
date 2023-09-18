import React from "react";
import { Cards } from "./components/Cards";
import { AventurasDashboardProvider } from "./context/AventurasDashboard";

export const AventurasDashboard = () => {
    return(
        <div>
            <AventurasDashboardProvider>
                <Cards/>
            </AventurasDashboardProvider>
            
        </div>
    )
}
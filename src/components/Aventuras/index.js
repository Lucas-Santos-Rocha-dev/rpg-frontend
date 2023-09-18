import React from "react";

import { Lista } from "./components/Lista";
import { AventurasProvider } from "./context/Aventuras";
import { TopoComBotoes } from "./components/TopoComBotoes";
import { AventuraForm } from "./components/AventuraForm";

export const Aventuras = () => {
    return(
        <div>
            <AventurasProvider>
                <TopoComBotoes/>
                <Lista/>
                <AventuraForm/>
            </AventurasProvider>
            
        </div>
    )
}
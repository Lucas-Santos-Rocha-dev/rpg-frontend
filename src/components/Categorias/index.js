import React from "react";
import { Lista } from "./components/Lista";
import { TopoComBotoes } from "./components/TopoComBotoes";
import { CategoriasProvider } from "./context/Categorias";

export const Categorias = () => {
    return (
        <CategoriasProvider>
            <div>
                <TopoComBotoes/>
                <Lista/>
            </div>
        </CategoriasProvider>
    )
}
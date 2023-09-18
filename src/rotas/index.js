import React from "react";
// import {Route, Routes} from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Categorias } from "../components/Categorias";
import { Home } from "../components/Home";
import { Aventuras } from "../components/Aventuras";
import { AventurasDashboard } from "../components/AventurasDashboard";

const routesConfig = [
    {
        exact: true,
        path: "/",
        component: <Home/>,
        permissoes: ['']
    },
    {
        exact: true,
        path: "/aventuras/",
        component: <Aventuras/>,
        permissoes: ['']
    },
    {
        exact: true,
        path: "/aventura-dashboard/:idAventura",
        component: <AventurasDashboard/>,
        permissoes: ['']
    },
    {
        exact: true,
        path: "/categorias-de-habilidade-da-aventura/:idAventura",
        component: <Categorias/>,
        permissoes: ['']
    },
]

const privateRouter = (key, exact, path, element, permissoes) => {
    // Implementar logica de permissoes?
    return <Route key={key} exact={exact} path={path} element={element}></Route>
}

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                {routesConfig.map((value, key) => {
                    return(
                        privateRouter(key, value.exact, value.path, value.component, value.permissoes)
                    )
                })}
            </Routes>
        </Router>
        
    )
}
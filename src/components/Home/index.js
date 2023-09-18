import React from "react";
import { CarouselHome } from "./components/CarouselHome";
import { SideLeft } from "./components/SideLeft";
import { SideRight } from "./components/SideRight";
import { Banner } from "./components/Banner";
import { Opcoes } from "./components/Opcoes";
import { AventurasProvider } from "../Aventuras/context/Aventuras";

export const Home = () => {
    return(
        <>
            <Banner/>

            <AventurasProvider>
                <Opcoes/>
            </AventurasProvider>
            
        </>
       
    )
}
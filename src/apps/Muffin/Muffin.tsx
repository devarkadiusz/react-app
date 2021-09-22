import React, { FunctionComponent } from "react";
import { Design } from "./Components/Design/Design";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import "./Muffin.sass";

export const Muffin: FunctionComponent = () => {
    return (
        <main>
            <Nav />
            <Header />
            <Design />
        </main>
    );
}
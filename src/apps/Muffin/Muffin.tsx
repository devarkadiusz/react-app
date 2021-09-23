import React, { FunctionComponent, useState } from "react";
import { Design } from "./Components/Design/Design";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import "./Muffin.sass";

export const Muffin: FunctionComponent = () => {
    const size = useState(Math.floor(Math.random() * 3));
    const fill = useState(Math.floor(Math.random() * 4));
    const top = useState(Math.floor(Math.random() * 4));
    const qua = useState(3);

    return (
        <main>
            <Nav size={size} fill={fill} top={top} qua={qua}/>
            <Header />
            <Design size={size} fill={fill} top={top} qua={qua}/>
            <Footer />
        </main>
    );
}
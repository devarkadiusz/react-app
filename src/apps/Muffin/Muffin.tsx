import React, { FunctionComponent, useState } from "react";
import { Design } from "./Components/Design/Design";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import "./Muffin.sass";

export const Muffin: FunctionComponent = () => {
    const size = useState(2);
    const fill = useState(0);
    const top = useState(0);
    const qua = useState(1);

    return (
        <main>
            <Nav size={size} fill={fill} top={top} qua={qua}/>
            <Header />
            <Design size={size} fill={fill} top={top} qua={qua}/>
        </main>
    );
}
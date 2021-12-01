import React, { FunctionComponent } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav";
import Skills from "./Components/Skills/Skills";
import "./Portfolio.sass";

export const Portfolio: FunctionComponent = () =>
{
    return (<main>
        <Nav />
        <Header />
        <Skills />
        <Footer />
    </main>);
}
import React, { FunctionComponent, useState } from "react";

import { useTranslation, initReactI18next, Trans } from "react-i18next";
import i18n from "./i18n";

import { Design } from "./Components/Design/Design";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import "./Muffin.sass";
import { Newsletter } from "./Components/Newsletter/Newsletter";
import { useCookies } from "react-cookie";

export const Muffin: FunctionComponent = () => {
    const size = useState(Math.floor(Math.random() * 3));
    const fill = useState(Math.floor(Math.random() * 4));
    const top = useState(Math.floor(Math.random() * 4));
    const qua = useState(3); 
    const [scroll, setScroll] = useState(window.scrollY || 0);

    const [cookies, setCookie, removeCookie] = useCookies(["lang"]);

    window.addEventListener("scroll", () => setScroll(window.scrollY));
    window.onload = () => {
        const lang = cookies["lang"];
        i18n.changeLanguage(lang);
        setL(lang);
    }

    const { t } = useTranslation();

    const [l, setL] = useState("GB");

    const lang = (lang: string) => {
        i18n.changeLanguage(lang);
        setCookie("lang", lang);
        setL(lang);
    }

    return (
        <main>
            <Nav scroll={scroll} size={size} fill={fill} top={top} qua={qua} lang={[lang, l]} t={t} />
            <Header scroll={scroll} t={t} />
            <Design size={size} fill={fill} top={top} qua={qua} t={t}/>
            <Newsletter t={t} />
            <Footer />
        </main>
    );
}
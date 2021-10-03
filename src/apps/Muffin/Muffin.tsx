import React, { FunctionComponent, useState } from "react";

import { useTranslation, initReactI18next, Trans } from "react-i18next";
import i18n from "./i18n";

import { Design } from "./Components/Design/Design";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Nav } from "./Components/Nav/Nav";

import "./Muffin.sass";
import { Newsletter } from "./Components/Newsletter/Newsletter";

export const Muffin: FunctionComponent = () => {
    const size = useState(Math.floor(Math.random() * 3));
    const fill = useState(Math.floor(Math.random() * 4));
    const top = useState(Math.floor(Math.random() * 4));
    const qua = useState(3); 

    const { t } = useTranslation();

    const lang = (lng: string) => {
        i18n.changeLanguage(lng);
        return lng;
    }

    return (
        <main>
            <Nav size={size} fill={fill} top={top} qua={qua} lang={lang} t={t} />
            <Header t={t} />
            <Design size={size} fill={fill} top={top} qua={qua} t={t}/>
            <Newsletter t={t} />
            <Footer />
        </main>
    );
}
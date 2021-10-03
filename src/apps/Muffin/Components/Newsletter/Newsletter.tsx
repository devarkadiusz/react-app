import React, { FunctionComponent } from "react";

import Confetti_1 from "../../Assets/Img/confetti.png";
import Confetti_2 from "../../Assets/Img/confetti.png";

import "./Newsletter.sass";

interface NewsletterProps {
    t: any;
}

export const Newsletter: FunctionComponent<NewsletterProps> = (props) => {
    const t = props.t;
    
    return (
        <section className="Newsletter" style={{background: "url(" + Confetti_1 +") center center"}}>
            <div className="width">
                <span className="title">{t("title")}</span>
                <span className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia eveniet ipsa amet consectetur doloremque perspiciatis, repellat molestias aut, nulla quaerat laudantium cupiditate placeat qui eum hic commodi quam debitis.</span>
                <div>
                    <input type="email" placeholder={t("subPlaceholder")} />
                    <input type="button" value={t("submit")} />
                </div>
            </div>
        </section>
    );
}
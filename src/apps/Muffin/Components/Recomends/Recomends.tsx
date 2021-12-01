import React, { FunctionComponent } from "react";

import "./Recomends.sass";

import MuffinIcon from "../../Assets/Img/muffin.png";

interface RecomendsProps {
    t: any;
}

export const Recomends: FunctionComponent<RecomendsProps> = props => {
    const t = props.t;
    return (
        <section className="Recomends">
            <nav>
                <div className="width">
                    <span className="title">{t("recommendations")}</span>
                </div>
            </nav>
            <div className="content">
                <div className="width">
                    <ul className="muffin_list">
                        {props.children}
                    </ul>
                </div>
            </div>
        </section>
    );
};
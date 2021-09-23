import React, { FunctionComponent } from "react";

import "./Recomends.sass";

import MuffinIcon from "../../Assets/Img/muffin.png";

export const Recomends: FunctionComponent = props => {
    return (
        <section className="Recomends">
            <nav>
                <div className="width">
                    <span className="title">Recommendations</span>
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
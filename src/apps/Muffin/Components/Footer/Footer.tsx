import React, { FunctionComponent } from "react";

import "./Footer.sass";

export const Footer: FunctionComponent = () => {
    return (
        <footer className="Footer">
            <div className="width">
                <div className="content">
                    <span>Copyright © 2021 Muffin</span>
                    <span className="heart">&#9829;</span>
                    <a target="_blank" href="https://github.com/devarkadiusz" >DevArkadiusz<img alt="" src={process.env.PUBLIC_URL + "/GitHub-Mark/GitHub-Mark-Light-120px-plus.png"} /></a>
                </div>
            </div>
        </footer>
    );
}
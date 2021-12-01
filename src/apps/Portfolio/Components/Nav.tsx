import React, { FunctionComponent, useState } from "react";
import "./Nav.sass";

const Nav: FunctionComponent = () => {
    const [scroll, setScroll] = useState(window.scrollY || 0);
    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return(<nav className={"Nav" + (scroll > 0 ? " active" : "")}>
        <div className="max-website-width">
            <div className="Logo">
                <span>DEV</span>
                <span>Arkadiusz</span>
            </div>
            <div className="Navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default Nav;
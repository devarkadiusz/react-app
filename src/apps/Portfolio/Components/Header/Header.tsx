import React, { FunctionComponent } from "react";
import "./Header.sass";

const Header: FunctionComponent = () => {
    return(<header className="Header">
        <div className="max-website-width">
            <h2>My name is</h2>
            <h1>Arkadiusz Szatkowski</h1>
            <ul>
                <li>Programmer</li>
                <li>FrontEnd Developer</li>
                <li>BackEnd Developer</li>
                <li>UI/UX Designer</li>
                <li>System Administrator </li>
            </ul>
        </div>
    </header>);
}

export default Header;
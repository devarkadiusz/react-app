import React, { FunctionComponent, useState } from "react";

import "./Header.sass";
import Confetti from "../../Assets/Img/confetti.png";

export const Header: FunctionComponent = () => {
    const [orderSwicth, setOrderSwicth] = useState(false);
    const [orderLocalisation, setOrderLocalisation] = useState("");
    return (
        <header className="Header">
            <div>
                <div className="orderbox">
                    <nav className={orderSwicth ? "right" : "left"}>
                        <span onClick={() => {setOrderSwicth(false)}}>Delivery</span>
                        <span onClick={() => {setOrderSwicth(true)}}>Order and pickup</span>
                        <span></span>
                    </nav>
                    <input type="text" onInput={e => setOrderLocalisation(e.currentTarget.value)} />
                    <input className={orderLocalisation.length > 0 ? "active" : ""} type="button" value={orderSwicth ? "Being your order" : "Find restaurant"} />
                </div>
            </div>
        </header>
    );
}
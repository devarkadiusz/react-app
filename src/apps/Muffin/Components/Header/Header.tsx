import React, { FunctionComponent, useState } from "react";

import "./Header.sass";
import Confetti from "../../Assets/Img/confetti.png";

interface HeaderProps {
    t: any;
}

export const Header: FunctionComponent<HeaderProps> = props => {
    const [orderSwicth, setOrderSwicth] = useState(false);
    const [orderLocalisation, setOrderLocalisation] = useState("");

    const t = props.t;

    return (
        <header className="Header">
            <div>
                <div className="orderbox">
                    <nav className={orderSwicth ? "right" : "left"}>
                        <span onClick={() => {setOrderSwicth(false)}}>{t("delivery")}</span>
                        <span onClick={() => {setOrderSwicth(true)}}>{t("orderAndPickup")}</span>
                        <span></span>
                    </nav>
                    <input type="text" onInput={e => setOrderLocalisation(e.currentTarget.value)} />
                    <input className={orderLocalisation.length > 0 ? "active" : ""} type="button" value={orderSwicth ? t("findRestaurant") : t("beingYourOrder")} />
                </div>
            </div>
        </header>
    );
}
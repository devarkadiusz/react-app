import React, { FunctionComponent, useState } from "react";

import "./Header.sass";
import Confetti from "../../Assets/Img/confetti2.png";

interface HeaderProps {
    scroll: number;
    t: any;
}

export const Header: FunctionComponent<HeaderProps> = props => {
    const [orderSwicth, setOrderSwicth] = useState(false);
    const [orderLocalisation, setOrderLocalisation] = useState("");

    const t = props.t;
    const scroll = props.scroll;

    return (
        <header className="Header" style={{backgroundPositionY: `-${scroll / 1.5}px`, background: "url(" + Confetti +") center center fixed"}}>
            <span className="background" style={{backgroundColor: `rgba(255, 255, 255, ${scroll / 350})`}}></span>
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
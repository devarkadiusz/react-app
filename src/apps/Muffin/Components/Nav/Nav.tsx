import React, { FunctionComponent } from "react";

import "./Nav.sass";
import Logo from "../../Assets/Img/muffin.png";
import PL from "../../Assets/Img/PL.png";
import GB from "../../Assets/Img/GB.png";
import ShoppingCartIcon from "../../Assets/Img/icons/icons8-shopping-cart-100.png";

const NavItems = [
    {
        "title": "With delivery"
    },
    {
        "title": "In restaurant"
    },
    {
        "title": "Contact"
    },
    {
        "title": "Coupons"
    }
]

export const Nav: FunctionComponent = (props) => {
    return (
        <nav className="Nav">
            <div className="width">
                <div className="left_menu">
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <ul>
                        {NavItems.map((_, index) => {
                            return <li key={index}>{_.title}</li>
                        })}
                        <span></span>
                    </ul>
                </div>
                <div className="right_menu">
                    <span className="shoppingCart">
                        <img src={ShoppingCartIcon} />
                        <span>5</span>
                    </span>
                    <span className="language">
                        <img src={PL} />
                    </span>
                </div>
            </div>
        </nav>
    );
}
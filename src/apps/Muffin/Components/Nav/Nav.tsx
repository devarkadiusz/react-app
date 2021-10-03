import React, { FunctionComponent, useState } from "react";
import { useCookies, Cookies } from "react-cookie";

import "./Nav.sass";
import ShoppingCartIcon from "../../Assets/Img/icons/icons8-shopping-cart-100.png";
import DeleteIcon from "../../Assets/Img/icons/icons8-delete-480.png";
import { SizeItems, FillingItems, ToppingItems } from "../../MuffinItems";

interface PreviewProps {
    filling: number;
    topping: number;
    onClick: any;
};

const Preview: FunctionComponent<PreviewProps> = props => {
    const fill = FillingItems[props.filling];
    const top = ToppingItems[props.topping];

    return (<span className="previewMuffin" onClick={props.onClick}>
        <img src={top?.iconSrc} />
        <img src={fill?.iconSrc} />
    </span>);
};

interface NavProps {
    size: [number, React.Dispatch<React.SetStateAction<number>>];
    fill: [number, React.Dispatch<React.SetStateAction<number>>];
    top: [number, React.Dispatch<React.SetStateAction<number>>];
    qua: [number, React.Dispatch<React.SetStateAction<number>>];

    lang: any;
    t: any;
}

export const Nav: FunctionComponent<NavProps> = (props) => {
    const [scroll, setScroll] = useState(window.scrollY || 0);
    const [webWidth, setWebWidth] = useState(window.innerWidth);
    const [hamburger, setHamburger] = useState(false);
    const [shoppingCartMobile, setShoppingCartMobile] = useState(false);

    const [basket, setBasket] = useState(false);

    const [size, setSize] = props.size;
    const [fillings, setFillings] = props.fill;
    const [toppings, setToppings] = props.top;
    const [quantity, setQuantity] = props.qua;

    const [lang, setLang] = useState("FR");

    const [cookies, setCookie, removeCookie] = useCookies(["shoppingCart"]);

    window.addEventListener("scroll", () => setScroll(window.scrollY))
    window.addEventListener("resize", () => {
        setWebWidth(window.innerWidth);
        setHamburger(false);
        setShoppingCartMobile(false);
    });

    const t = props.t

    const LangItems = [
        "PL", "GB", "DE", "FR"
    ]

    const NavItems = [
        {
            "title": t("withDelivery")
        },
        {
            "title": t("inRestaurant")
        },
        {
            "title": t("contact")
        },
        {
            "title": t("coupons")
        }
    ]

    const RemoveShoppingItem = (index: number) => {
        cookies["shoppingCart"].splice(index, 1);
        setCookie("shoppingCart", cookies["shoppingCart"]);
        if(cookies["shoppingCart"])
        {
            if(cookies["shoppingCart"].length == 0)
                setShoppingCartMobile(false);
        }
    }

    const GetShoppingList: FunctionComponent = () => {
        let result = [];
        let FullPrice = 0;
        let FullQuantity = 0;
        if (cookies["shoppingCart"]) {
            let data = cookies.shoppingCart;
            for (let index = 0; index < data.length; index++) {
                const item = data[index];
                // const price = ((SizeItems[item.size].price + FillingItems[item.fill].price + ToppingItems[item.top].price)) * item.quantity * (t("lang") == "DE" ? .8 : t("lang") == "GB" ? 1 : 4.5)
                const price = SizeItems[item.size].price + FillingItems[item.fill].price + ToppingItems[item.top].price
                const priceD = (price * item.quantity) * (t("lang") == "DE" ? 1 : t("lang") == "GB" ? .9 : 4.5)
                FullPrice += priceD
                FullQuantity += item.quantity
                result.push({
                    "prev": <Preview filling={item.fill} topping={item.top} onClick={() => {
                        setSize(item.size);
                        setFillings(item.fill);
                        setToppings(item.top);
                        setQuantity(item.quantity);
                    }}/>,
                    "quantity": item.quantity,
                    "price": priceD.toFixed(2),
                    "remove": <span className="remove" onClick={() => RemoveShoppingItem(index)}><img src={DeleteIcon} /></span>
                });
            }
            result.push({
                "price": FullPrice.toFixed(2)
            });
        }
        return <ul>{result.map((item, index) => {
            return <li key={index}>
                {item.prev ? item.prev : <span>{t("price")}</span>}
                {item.quantity ? <span>x{item.quantity}</span> : <span>x{FullQuantity}</span>}
                <span>{item.price} {t("currency")} {item.remove ? item.remove : <span className="remove"></span>}</span>
            </li>
        })}</ul>
    }

    return (
        <nav className={scroll > 300 ? "Nav active" : "Nav"}>
            <div className="width">
            {webWidth <= 1300 ? <span className={hamburger ? "hamburger active" : "hamburger"} onClick={() => {
                setHamburger(!hamburger); 
                setShoppingCartMobile(false);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </span> : null}
                <div className="left_menu">
                    <div className="logo">
                        <Preview filling={fillings} topping={toppings} onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}/>
                        <span className="name">Muffin</span>
                    </div>
                    <ul className={hamburger && webWidth <= 1300 ? "active" : ""}>
                        {NavItems.map((_, index) => {
                            return <li key={index}>{_.title}</li>
                        })}
                        <span className="hover"></span>
                    </ul>
                </div>
                <div className="right_menu" onMouseLeave={() => webWidth < 1300 ? null : setBasket(false)} onClick={() => {
                    if(webWidth <= 1300) {
                        setHamburger(false);
                        setBasket(false);
                    }
                    }}>
                    <span className="shoppingCart" onClick={() => webWidth < 1300 && cookies["shoppingCart"]?.length > 0 ? setShoppingCartMobile(!shoppingCartMobile) : null} onMouseEnter={() => webWidth < 1300 ? null : setBasket(true)}>
                        <img src={ShoppingCartIcon} />
                        <span>{cookies["shoppingCart"]?.length}</span>
                    </span>
                    {basket || shoppingCartMobile && cookies["shoppingCart"]?.length > 0 ? <div className="shoppingCartList" onMouseLeave={() => webWidth < 1300 ? null : setBasket(false)}>
                        {cookies["shoppingCart"]?.length > 0 ? <GetShoppingList /> : null }
                    </div> : null}
                    <span className="language">
                        <img src={process.env.PUBLIC_URL + `./lang/${lang}.png`} />
                        <ul className="other">
                            {LangItems.map((item, index) => {
                                return lang != item ? <li key={index} onClick={() => {setLang(item); props.lang(item)}}><img src={process.env.PUBLIC_URL + `./lang/${item}.png`} /></li> : null
                            })}
                        </ul>
                    </span>
                    {/* <span className="language">
                        <img src={process.env.PUBLIC_URL + `./lang/${lang}.png`} onClick={
                            () => {
                                lang == "PL" ? props.lang("GB") : props.lang("PL")
                                lang == "PL" ? setLang("GB") : setLang("PL")}} />
                    </span> */}
                </div>
            </div>
        </nav>
    );
}
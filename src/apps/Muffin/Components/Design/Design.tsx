import React, { FunctionComponent, useEffect, useState } from "react";

import "./Design.sass";
// import MuffinIcon from "../../Assets/Img/muffin.png";
import CheckedIcon from "../../Assets/Img/icons/icons8-checked-512-red.png";
// import ChocolateIcon from "../../Assets/Img/icons/chocolate.svg";
import PlusIcon from "../../Assets/Img/icons/icons8-add-100-red.png";
import MinusIcon from "../../Assets/Img/icons/icons8-minus-100-red.png";

import { SizeItems, FillingItems, ToppingItems, RecomendItems } from "../../MuffinItems";

import { Recomends } from "../Recomends/Recomends";
import { useCookies } from "react-cookie";

interface PreviewProps {
    filling: number;
    topping: number;
};

const Preview: FunctionComponent<PreviewProps> = props => {
    const fill = FillingItems[props.filling];
    const top = ToppingItems[props.topping];
    return (<span className="previewMuffin">
        <img src={top?.iconSrc} />
        <img src={fill?.iconSrc} />
    </span>);
};

interface DesignProps {
    size: [number, React.Dispatch<React.SetStateAction<number>>],
    fill: [number, React.Dispatch<React.SetStateAction<number>>],
    top: [number, React.Dispatch<React.SetStateAction<number>>],
    qua: [number, React.Dispatch<React.SetStateAction<number>>],

    t: any;
}

export const Design: FunctionComponent<DesignProps> = (props) => {
    const [size, setSize] = props.size;
    const [fillings, setFillings] = props.fill;
    const [toppings, setToppings] = props.top;
    const [quantity, setQuantity] = props.qua;
    const t = props.t;

    const [disableOrder, setDisableOrder] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["shoppingCart"]);

    useEffect(() => {
        if (cookies["shoppingCart"]) {
            if (cookies["shoppingCart"].length >= 8)
                setDisableOrder(true);
            else
                setDisableOrder(false);
        }
    })

    const SetQ = (e: any) => {
        if (e.target.value.length == 0) {
            setQuantity(1)
        } else {
            if (isNaN(e.target.value))
                setQuantity(1)
            else if (parseInt(e.target.value) > 20)
                setQuantity(20)
            else if (parseInt(e.target.value) < 1)
                setQuantity(1)
            else setQuantity(parseInt(e.target.value))
        }
    }

    const AddToShoppingCart = () => {
        const c = cookies["shoppingCart"];

        if (quantity > 0 && quantity < 21) {

            if (!c)
                setCookie("shoppingCart", [{
                    "size": size,
                    "fill": fillings,
                    "top": toppings,
                    "quantity": quantity
                }]);
            else {
                if (c.length < 8)
                    setCookie("shoppingCart", [...c, {
                        "size": size,
                        "fill": fillings,
                        "top": toppings,
                        "quantity": quantity
                    }]);
                else setDisableOrder(true);
            }
        }
    }

    const Price: FunctionComponent = () => {
        const price = SizeItems[size].price + FillingItems[fillings].price + ToppingItems[toppings].price
        const priceD = ((price * quantity) * (t("lang") == "DE" ? 1 : t("lang") == "GB" ? .9 : 4.5)).toFixed(2)
        return <span>{t("price")}: {priceD} {t("currency")}</span>
    }

    return (
        <section className="Design">
            <Recomends t={t}>
                {RecomendItems.map((_, index) => {
                    return <li key={index} onClick={() => {
                        setSize(_.size);
                        setFillings(_.fill);
                        setToppings(_.top);
                    }}>
                        <Preview filling={_.fill} topping={_.top} />
                        <span>{_.name}</span>
                    </li>
                })}
            </Recomends>
            <header>
                <div className="width">
                    <span className="title">{t("designAMuffin")}</span>
                </div>
            </header>
            <div className="content">
                <div className="select">
                    <div className="Size">
                        <div className="title">
                            <span>{t("size")}</span>
                        </div>
                        <ul>
                            {SizeItems.map((item, index) => {
                                return <li key={index} onClick={() => setSize(index)}>
                                    <Preview filling={fillings} topping={toppings} />
                                    {size == index ? <img className="checked" src={CheckedIcon} /> : null}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="Fillings">
                        <div className="title">
                            <span>{t("fillings")}</span>
                        </div>
                        <ul>
                            {FillingItems.map((item, index) => {
                                return <li key={index} onClick={() => setFillings(index)}>
                                    <img src={item.iconSrc} />
                                    <span>{t(item.name)}</span>
                                    {fillings == index ? <img className="checked" src={CheckedIcon} /> : null}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="Toppings">
                        <div className="title">
                            <span>{t("toppings")}</span>
                        </div>
                        <ul>
                            {ToppingItems.map((item, index) => {
                                return <li key={index} onClick={() => setToppings(index)}>
                                    <img src={item.iconSrc} />
                                    <span>{t(item.name)}</span>
                                    {toppings == index ? <img className="checked" src={CheckedIcon} /> : null}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="Quantity active">
                        <div className="title">
                            <span>{t("quantity")}</span>
                            <div className="content">
                                {quantity > 1 ?
                                    <span onClick={() => { quantity < 2 ? setQuantity(1) : setQuantity(quantity - 1) }}>
                                        <img src={MinusIcon} />
                                    </span> : <div style={{ width: "50px" }}></div>
                                }
                                <input min="1" max="20" type="number" value={quantity} onInput={SetQ} />
                                {quantity < 20 ?
                                    <span onClick={() => { quantity >= 20 ? setQuantity(20) : setQuantity(quantity + 1) }}>
                                        <img src={PlusIcon} />
                                    </span> : <div style={{ width: "50px" }}></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="Price active">
                        <div className={!disableOrder ? "title" : "title disable"} onClick={AddToShoppingCart}>
                            <Price />
                            {!disableOrder ? <span>{t("order")}</span> : <span>{t("youCanNotOrderMore")}</span>}
                        </div>
                    </div>

                    {/* <div className="Price active">
                        <div className={"title"} onClick={AddToShoppingCart}>
                            <Price />
                            {<span>{t("order")}</span>}
                        </div>
                    </div> */}

                </div>
                <div className={"preview size_" + size}>
                    <Preview filling={fillings} topping={toppings} />
                </div>
            </div>
        </section>
    );
};
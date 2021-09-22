import React, { FunctionComponent, useState } from "react";

import "./Design.sass";
import MuffinIcon from "../../Assets/Img/muffin.png";
import CheckedIcon from "../../Assets/Img/icons/icons8-checked-512-red.png";
import ChocolateIcon from "../../Assets/Img/icons/chocolate.svg";
import PlusIcon from "../../Assets/Img/icons/icons8-add-100-red.png";
import MinusIcon from "../../Assets/Img/icons/icons8-minus-100-red.png";

import { SizeItems, FillingItems, ToppingItems, RecomendItems } from "../../MuffinItems";

import { Recomends } from "../Recomends/Recomends";

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

export const Design: FunctionComponent = () => {
    const [size, setSize] = useState(2);
    const [fillings, setFillings] = useState(0);
    const [toppings, setToppings] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const Price: FunctionComponent = () => {
        const price = SizeItems[size].price + FillingItems[fillings].price + ToppingItems[toppings].price
        return <span>Price: {price * quantity} Euro</span>
    }

    return (
        <section className="Design">
            <Recomends>
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
                    <span className="title">Design a Muffin</span>
                </div>
            </header>
            <div className="content">
                <div className="select">
                    <div className="Size">
                        <div className="title">
                            <span>Size</span>
                        </div>
                        <ul>
                            {SizeItems.map((item, index) => {
                                return <li key={index} onClick={() => setSize(index)}>
                                    <img src={item.iconSrc} />
                                    {size == index ? <img className="checked" src={CheckedIcon} /> : null}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="Fillings">
                        <div className="title">
                            <span>Fillings</span>
                        </div>
                        <ul>
                            {FillingItems.map((item, index) => {
                                return <li key={index} onClick={() => setFillings(index)}>
                                    <img src={item.iconSrc} />
                                    <span>{item.name}</span>
                                    {fillings == index ? <img className="checked" src={CheckedIcon} /> : null}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="Toppings">
                        <div className="title">
                            <span>Toppings</span>
                        </div>
                        <ul>
                            {ToppingItems.map((item, index) => {
                                return <li key={index} onClick={() => setToppings(index)}>
                                    <img src={item.iconSrc} />
                                    <span>{item.name}</span>
                                    {toppings == index ? <img className="checked" src={CheckedIcon} /> : null}
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="Quantity active">
                        <div className="title">
                            <span>Quantity</span>
                            <div className="content">
                                <span onClick={() => { quantity == 1 ? setQuantity(quantity) : setQuantity(quantity - 1) }}>
                                    <img src={MinusIcon} />
                                </span>
                                <input min="1" max="20" type="number" value={quantity} />
                                <span onClick={() => { quantity >= 20 ? setQuantity(quantity) : setQuantity(quantity + 1) }}>
                                    <img src={PlusIcon} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Price active">
                        <div className="title">
                            <Price />
                            <span>Order</span>
                        </div>
                    </div>
                </div>
                <div className={"preview size_" + size}>
                    <Preview filling={fillings} topping={toppings} />
                </div>
            </div>
        </section>
    );
};
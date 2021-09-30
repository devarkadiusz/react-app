import MuffinIcon from "./Assets/Img/muffin.png";

import MuffinBase from "./Assets/Img/Muffin/muffin-base.png";
import MuffinBaseRaspberry from "./Assets/Img/Muffin/muffin-base-raspberry.png";
import MuffinBaseChocolate from "./Assets/Img/Muffin/muffin-base-chocolate.png";
import MuffinBaseHoney from "./Assets/Img/Muffin/muffin-base-honey.png";

import MuffinTop from "./Assets/Img/Muffin/muffin-top.png";
import MuffinTopRaspberry from "./Assets/Img/Muffin/muffin-top-raspberry.png";
import MuffinTopChocolate from "./Assets/Img/Muffin/muffin-top-chocolate.png";
import MuffinTopHoney from "./Assets/Img/Muffin/muffin-top-honey.png";

export const SizeItems = [
    {
        "size": 0,
        "price": 1,
        "iconSrc": MuffinIcon
    },
    {
        "size": 1,
        "price": 2,
        "iconSrc": MuffinIcon
    },
    {
        "size": 2,
        "price": 3,
        "iconSrc": MuffinIcon
    }
];
export const FillingItems = [
    {
        "name": "chocolate",
        "price": 2,
        "iconSrc": MuffinBaseChocolate
    },
    {
        "name": "honey",
        "price": 3,
        "iconSrc": MuffinBaseHoney
    },
    {
        "name": "raspberry",
        "price": 4,
        "iconSrc": MuffinBaseRaspberry
    },
    {
        "name": "none",
        "price": 0,
        "iconSrc": MuffinBase
    },
];
export const ToppingItems = [
    {
        "name": "chocolate",
        "price": 2,
        "iconSrc": MuffinTopChocolate
    },
    {
        "name": "honey",
        "price": 3,
        "iconSrc": MuffinTopHoney
    },
    {
        "name": "raspberry",
        "price": 4,
        "iconSrc": MuffinTopRaspberry
    },
    {
        "name": "none",
        "price": 0,
        "iconSrc": MuffinTop
    },
];

export const RecomendItems = [
    {
        "name": "Miniffin",
        "top": 0,
        "fill": 2,
        "size": 0
    },
    {
        "name": "MuffiDay",
        "top": 1,
        "fill": 0,
        "size": 2
    },
    {
        "name": "MuffiMix",
        "top": 2,
        "fill": 1,
        "size": 1
    }
]
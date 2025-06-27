import { FaVolleyball, FaPersonSwimming } from "react-icons/fa6";
import { IoBasketballSharp, IoFootball, IoTennisball } from "react-icons/io5";
import { MdSportsHandball } from "react-icons/md";
import { PiVolleyballFill } from "react-icons/pi";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

const categories: Record<string, ElementType> = {
    "futsal": IoFootball,
    "volei": FaVolleyball,
    "basquete": IoBasketballSharp,
    "handball": MdSportsHandball,
    "futebol": IoFootball,
    "tenis": IoTennisball,
    "natacao": FaPersonSwimming,
    "voleideareaia": PiVolleyballFill
};

export type CategoryIconProps = {
    name:string,
    iconClass?:string,
    categoryClass?:string
}

export function CategoryIcon({ name,iconClass,categoryClass }: CategoryIconProps) {
    const formatedName = name.toLowerCase().trim();
    const Icon = categories[formatedName] || IoFootball;

    return (
        <div className={twMerge("flex flex-row gap-1 items-center")}>
            <Icon className={twMerge("text-[12px]",iconClass)} />
            <span className={twMerge("text-[11px] capitalize whitespace-nowrap",categoryClass)}>{formatedName}</span>
        </div>
    );
}

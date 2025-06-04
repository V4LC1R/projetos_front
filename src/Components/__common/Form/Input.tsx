import { InputText } from "primereact/inputtext";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?:string
    icon?: ElementType;
    styleLabel?:string;
    iconStyle?: string;
}

export function InputCustom({label,icon,className,styleLabel,iconStyle,...props}:InputCustomProps){

    const Icon = icon ? icon: null;

    return (
        <div className="pt-1 w-full">
            <div className="relative flex flex-col gap-[3px] w-full border border-he-gray-200 rounded-[4px] focus:border-he-green-500">
            { label && <label className={twMerge("text-he-gray-700 text-sm absolute bg-white bottom-[28px] left-1 px-2",styleLabel)}>{label}</label> }
                <input
                    {...props}
                    className={twMerge("w-full h-[40px] px-2 focus:outline-none text-sm",className)}
                ></input>
                {Icon && <Icon className={iconStyle}/>}
            </div>
        </div>
    )

}
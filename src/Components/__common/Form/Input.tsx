import { ElementType } from "react";
import { twMerge,twJoin } from "tailwind-merge";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?:string
    icon?: ElementType;
    styleLabel?:string;
    iconStyle?: string;
    inputStyle?:string
}

export function InputCustom({label,icon,className,styleLabel,iconStyle,inputStyle,...props}:InputCustomProps){

    const Icon = icon ? icon: null;

    return (
        <div className={twMerge("my-1 w-full",className)}>
            <div className="relative flex flex-col gap-[3px] w-full border border-he-gray-200 rounded-[4px] focus:border-he-green-500">
            { label && <label className={twMerge("text-he-gray-700 rounded-4xl text-sm absolute bg-white bottom-[28px] left-1 px-2",styleLabel)}>{label}</label> }
                <input
                    {...props}
                    className={twMerge("h-[40px] w-full px-2 focus:outline-none text-[16px]",inputStyle)}
                ></input>
                {Icon && <Icon className={iconStyle}/>}
            </div>
        </div>
    )

}
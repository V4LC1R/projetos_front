import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export type OptionProps={
    label:string | number
    value:string | number
}


interface SelectCustomProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?:string
    options:OptionProps[]
    icon?: ElementType;
    styleLabel?:string;
    selectStyle?:string
}

export function Select({label,selectStyle,styleLabel,options, ...props}:SelectCustomProps){

    return (
        <>
            <div className="relative my-1 flex flex-col gap-[3px] w-full border border-he-gray-200 rounded-[4px] focus:border-he-green-500">
                { label && <label className={twMerge("text-he-gray-700 rounded-4xl text-sm absolute bg-white bottom-[34px] left-1 px-2",styleLabel)}>{label}</label> }
                <select
                    {...props}
                    className={twMerge("h-[40px] w-full px-2 focus:outline-none text-[16px]",selectStyle)}
                >

                    {
                        options.map((opt,i)=>(
                            <option selected={props.value == opt.value} value={opt.value} key={i}>
                                {opt.label}
                            </option>
                        ))
                    }
                    
                </select>
            </div>
        </>
    )
}
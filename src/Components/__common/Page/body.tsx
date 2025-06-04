import { twMerge } from "tailwind-merge";
import { BaseProps } from "../Types/base";


export function BodyPage({children,className}: BaseProps) {
    return (
        <div className={twMerge("w-full h-full flex flex-col items-center justify-start px-2 md:p-2 gap-2")}>
            <div 
                className={twMerge("bg-white md:h-[600px] md:w-[450px] rounded-tl-[4px] rounded-tr-[4px] md:rounded-[4px] w-full mt-1",className)}
            >
                {children}
            </div>   
        </div>
    )
}
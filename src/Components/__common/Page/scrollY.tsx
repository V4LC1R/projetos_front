import { twMerge } from "tailwind-merge";
import { BaseProps } from "../Types/base";

export interface ScrollYProps extends BaseProps{
    areaScrollClass?:string
}

export function ScrollY({children,className,areaScrollClass}: ScrollYProps) {
    return (
        <div className={twMerge("overflow-y-auto w-full flex flex-col custom-scrollbar",className)}>
            <div className={twMerge("flex flex-col gap-5",areaScrollClass)}>
            { children }
            </div>
        </div>
    )
}
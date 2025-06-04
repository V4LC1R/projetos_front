import { twMerge } from "tailwind-merge";
import { BaseProps } from "../Types/base";

export function ScrollY({children,className}: BaseProps) {
    return (
        <div className={twMerge("overflow-y-auto w-full flex flex-col custom-scrollbar",className)}>
            <div className="flex flex-col gap-5" >
            { children }
            </div>
        </div>
    )
}
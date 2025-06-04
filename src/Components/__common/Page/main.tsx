import { twMerge } from "tailwind-merge";
import { BaseProps } from "../Types/base";

export function MainPage({children, className}:BaseProps) {
    return (
        <main className={twMerge("w-full h-full flex flex-col items-center justify-start p-2 gap-2", className)}>
           {children}
        </main>
    )
}
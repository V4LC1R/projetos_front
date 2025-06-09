import { Button } from "primereact/button";
import { twMerge } from "tailwind-merge";

type ButtonCustomVariant = "primary" | "secondary" | "tertiary";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonCustomVariant;
}

type VariantStyles = {
    [key in ButtonCustomVariant]: string;
}

export function ButtonCutom({className,variant,children,...props}: ButtonCustomProps) {
    const variantStyles:VariantStyles = {
       primary:"bg-he-green-700 text-white hover:bg-he-green-800 focus:bg-he-green-800 active:bg-he-green-900",
       secondary:"bg-white text-he-he-green-700 hover:bg-he-gray-100 focus:bg-he-gray-100 active:bg-he-gray-200 border border-he-gray-300",
       tertiary:""
    }

    const variantInUse = variant ? variantStyles[variant] : variantStyles["primary"] ;

    return (
        <Button
            {...props}
            className={twMerge("transition duration-200 w-[50px] h-[40px] rounded-[4px] justify-center  items-center",variantInUse,className)}
        >
            {children}
        </Button>
    )
}
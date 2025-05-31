import { InputHTMLAttributes } from "react";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement>{
    lable?:string
}

export function InputCustom({lable,className,...props}:InputCustomProps)
{
    const classInput = `outline-0 rounded ${className}`

    return(
        <div
            className="flex flex-col text-left"
        >
           {
            lable && 
                <label>{lable}</label>
           }
            <input
                className={classInput}
                {...props}
            />
        </div>
    )
}
import { Spin } from "..";

type SpinWithMessageProps = {
    message: string, 
    sizeSpin?: number
}

export function SpinWithMessage({message}: SpinWithMessageProps) {
  return (
    <div className=" w-full  flex flex-col items-center px-2.5 py-2 justify-start gap-3.5">
        <header className="text-center w-full text-[18px] font-bold">
            <span className="text-he-green-600">{message} . . .</span>
        </header>
        <Spin/>
    </div>
  );
}
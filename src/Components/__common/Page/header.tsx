import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

type HeaderPageProps = {
    removeBack?:boolean;
    title:string
}

export function HeaderPage({title,removeBack}: HeaderPageProps) {

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <header className="h-[30px] w-full flex items-center flex-row text-he-green-700 ">
           { !removeBack &&  <FaArrowLeft onClick={()=>handleBack()} className="hover:text-he-green-900 w-[10%] transition-all duration-300 text-xl cursor-pointer" />  }
            <div className={`${removeBack ? 'w-[85%]' : ' w-full'} flex flex-col items-center font-bold text-xl`}>
                <span >{title}</span>       
            </div>
        </header>
    );
}
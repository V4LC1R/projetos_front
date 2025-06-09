import { FaMapLocationDot } from "react-icons/fa6";

export function ProfileGuest(){
    return (
         <div className="realtive z-2 md:gap-2 w-full shadow-4xl bg-white rounded-tl-[8px] rounded-tr-[8px] md:rounded-[4px] text-center md:flex md:flex-col md:items-center md:justify-start">
            <div className="bg-white overflow-hidden w-[90%] md:w-full h-[225px] rounded-tl-[8px] rounded-tr-[8px]  md:rounded-[4px] shadow-md md:shadow-gray-400  flex flex-col items-center justify-start md:relative md:top-0 md:left-0 top-[calc(-90px)] left-[5%]">
                <div className="bg-he-green-100 w-full h-[90px] text-center flex flex-col justify-center text-white ">
                    <img className="w-full h-full object-cover" src="https:www.shutterstock.com/image-photo/indoor-photo-highly-realistic-closeup-260nw-2524065479.jpg" alt="" />
                </div>
                <div className="flex flex-col w-full h-[100px] items-center justify-start ">
                    <div className="flex flex-row items-center justify-center w-full h-full px-2 font-semibold text-he-gray-800">
                        <div className="flex flex-col items-start justify-center w-full h-full  ">
                            <span className="text-he-gray-900 font-bold">Escola M. Avani</span>
                            <span>Avenida Jose Roberto Texeira</span>
                            <span>Jardim Florida</span>
                        </div>

                        <span className="w-15">Nº 130</span>
                    </div>

                    <div className="w-full h-full flex flex-row items-center justify-between px-2">
                        <div className="border-1 border-he-gray-200 w-[12rem] h-[3rem] rounded-md text-center text-he-gray-800 font-semibold  px-4 py-2 flex flex-col justify-center items-center text-nowrap">
                            <p className="font-semibold text-[16px]"><span className="font-bold text-[22px]">150,00 </span> R$/Hr</p>
                        </div>
                        <span className="text-he-green-300 text-[32px]">
                            <FaMapLocationDot/>
                        </span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
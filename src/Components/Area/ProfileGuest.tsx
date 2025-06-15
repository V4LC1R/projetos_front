import { FaMapLocationDot } from "react-icons/fa6";

import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";


export function ProfileGuest(){
    return (
         <div className="realtive z-2 md:gap-2 w-full shadow-4xl bg-white rounded-tl-[8px] rounded-tr-[8px] md:rounded-[4px] text-center md:flex md:flex-col md:items-center md:justify-start">
            <div className="bg-white overflow-hidden w-full h-[225px] rounded-[4px] shadow-md md:shadow-gray-400  flex flex-col items-center justify-start gap-2">
                <div className="bg-he-green-100 w-full h-[90px] text-center flex flex-col justify-center text-white ">
                    <img className="w-full h-full object-cover" src="https:www.shutterstock.com/image-photo/indoor-photo-highly-realistic-closeup-260nw-2524065479.jpg" alt="" />
                </div>
                <div className="flex flex-col w-full h-[100px] items-center justify-start ">
                    <div className="flex flex-row items-center justify-center w-full h-full px-2 font-semibold text-he-gray-800">
                        <div className="flex flex-col items-start justify-center w-full h-full gap-1 ">
                            <div className="flex flex-row justify-star items-center gap-2">
                                <FaBuilding className="text-[18px]"/>
                                <span className="text-he-gray-900 font-bold">Escola M. Avani</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaMapMarkerAlt className="text-he-green-400 text-[18px]"/>
                                <div className="flex flex-col gap-0.5 ">
                                    <span className="">Avenida Jose Roberto Texeira</span>
                                    <div className="flex flex-row gap-1">
                                        <span>Jardim Florida</span>
                                        <span className="w-15">Nº 130</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                         
                        <div className="flex relative h-full text-[20px] flex-row gap-1 justify-center items-start">
                            <span  className="text-he-gray-800 w-full mb-5 text-[10px]">R$/Hr</span>
                            <div className="text-he-gray-800 text-[15px] flex flex-col justify-end items-end">
                                <div>
                                    <span className="font-bold text-[32px]">25</span>,00
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
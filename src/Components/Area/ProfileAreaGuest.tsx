import { FaMapLocationDot } from "react-icons/fa6";

import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { Area } from "@services/Area";
import { NumberHelper } from "@services/Format/Number";

export type ProfileAreaGuestProps={
    profile:Area
}

export function ProfileAreaGuest({profile}:ProfileAreaGuestProps){
    const splitValue = NumberHelper.numberMoneySplit(profile.rent)

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
                                <span className="text-he-gray-900 font-bold">{profile.name}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaMapMarkerAlt className="text-he-green-400 text-[18px]"/>
                                <div className="flex flex-col gap-0.5 ">
                                    <span className="">{profile.address.street}</span>
                                    <div className="flex flex-row gap-1">
                                        <span>{profile.address.district}</span>
                                        <span className="w-15">Nº {profile.address.number_place}</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                         
                        <div className="flex relative h-full text-[20px] flex-row gap-1 justify-center items-start">
                            <span  className="text-he-gray-800 w-full mb-5 text-[10px]">R$/Hr</span>
                            <div className="text-he-gray-800 text-[15px] flex flex-col justify-end items-end">
                                <div>
                                    <span className="font-bold text-[32px]">{splitValue[0]}</span>,{splitValue[1] ?? "00"}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
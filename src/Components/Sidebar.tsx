import { useUser } from "@context/UserContext";
import api from "@services/api";
import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa6";
import { Streak } from "../@types/App";

export function Sidebar(){
    const {user} = useUser()

    const [streak,setStreak] = useState(0)
    const [motivational,setMotivational] = useState('Muitos tentaram, mas poucos conseguiram!')
    const [title,setTitle] = useState('Parabens!')

    async function loadStreakSeries(){
        try {
            const {data}:{data:Streak} = await api.get('/user/my-streak')
            setStreak(()=>data ?  data.streak : 0)
            setMotivational(()=> data.motivational ?? motivational)
            setTitle(()=>data.title ?? title)

        } catch (error) {
            
        }
    }

    useEffect(()=>{
        if(user.type==1)
            loadStreakSeries()
    },[user])

    return(
        <aside className="hidden md:flex z-10  flex-row md:flex-col gap-4 justify-center md:justify-start">

            <div id="profile-card" className="w-[40%] md:w-full bg-gray-100 flex flex-col shadow rounded items-center gap-3">

                <div className="bg-gray-200 md:h-15 h-10 flex relative flex-col items-center  p-4 w-full">
                    <div className="md:w-[55px] md:h-[55px] w-[35px] h-[35px] bg-gray-600 rounded top-5 absolute"/>

                </div>

                <div id="motivacional" className="w-full text-center py-4 px-2 md:p-4">
                    <h1 className="md:text-[16px] text-[12px] font-bold text-gray-600">
                        {user.name}
                    </h1>
                    <span className="md:mt-1 md:text-[14px] text-[11px]">
                        {user.email}
                    </span>
                </div>
            
            </div>
            
           {
                user.type > 4 &&
                    (
                        <div  id="streak-counter" className="w-[60%] md:w-full bg-white flex flex-col-reverse shadow rounded p-2 md:flex-row-reverse justify-center items-center md:gap-1">
                        
                            <div id="motivacional" className="w-full md:text-left text-center">
                                <span className="md:text-[14px] text-[12px] font-bold text-gray-600">
                                    {title}
                                </span>
                                <p className="md:mt-1 md:text-[12px] text-[10px]">
                                    {motivational}
                                </p>
                            </div>
                        
                            <div className="md:w-25 md:h-25 flex flex-col items-center justify-center text-wfc-yellow md:p-0 md:gap-0.5">
                                <FaFire className="w-[40px] h-[40px]"/>
                                <span className=" font-bold">{streak} dia{streak < 2 ? '' : 's'}</span>
                            </div>

                        </div>
                    )
           }

        </aside>
    )
}
import { SearchArea } from "@components/Charts/SearchArea";
import { Sidebar } from "@components/Sidebar";
import { TopHeader } from "@components/TopHeader";
import { Outlet } from "react-router";

export function DashLayout()
{
    return (
        <div className="h-[100svh] bg-gray-900 flex flex-col text-center items-center">
            
            <TopHeader/>
            
            <div className=" relative gap-2 grid grid--rows-[130px_1fr] md:grid-rows-1 md:grid-cols-[300px_1fr] w-full h-[95%] px-1 py-2">

                <div/>

                <main className="absolute md:relative overflow-hidden h-full bg-white rounded shadow  md: gap-2 w-full">
                    
                    <Outlet/>
                    
                </main>

            </div>

        </div>
    )
}
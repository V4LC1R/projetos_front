import { IoNotifications } from "react-icons/io5";
import { ItemSidebar } from "./ItemSidebar";
import { FaMapLocation } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdRequestQuote } from "react-icons/md";
import { BsCalendar2EventFill } from "react-icons/bs";


const sidebarItems = [
    {
        icon: AiFillHome,
        label: "Home",
        url: "/finder"
    },
    {
        icon: IoNotifications,
        label: "Minhas Solicitações",
        url: "/my-requests"
    },
     {
        icon: MdRequestQuote,
        label: "Solicitações da Area",
        url: "/requests"
    },
    {
        icon: FaMapLocation,
        label: "Areas",
        url: "/my-areas",
    },
    {
        icon: BsCalendar2EventFill,
        label: "Eventos",
        url: "/my-events",
    },
]


export function ListSidebar(){
    return(
        <ul className="flex flex-col h-full gap-8">

            {
                sidebarItems.map((item) => 
                    <ItemSidebar 
                        key={item.label} 
                        icon={item.icon} 
                        label={item.label} 
                        url={'/app'+item.url}
                    />
                )
            }
        </ul>
    )
}
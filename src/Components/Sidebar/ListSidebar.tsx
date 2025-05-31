import { IoNotifications, IoPieChartSharp } from "react-icons/io5";
import { ItemSidebar } from "./ItemSidebar";
import { FaMapLocation, FaUserGroup } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

const sidebarItems = [
    {
        icon: AiFillHome,
        label: "Home",
        url: "/finder"
    },
    {
        icon: IoNotifications,
        label: "Solicitações",
        url: "/requests"
    },
    {
        icon: FaMapLocation,
        label: "Areas",
        url: "/areas",
    },
    {
        icon: FaUserGroup,
        label: "Equipes",
        url: "/teams"
    },
    {
        icon: RiSettings4Fill,
        label: "Configurações",
        url: "/settings"
    },
    {
        icon: IoPieChartSharp,
        label: "Relatórios",
        url: "/reports"
    }
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
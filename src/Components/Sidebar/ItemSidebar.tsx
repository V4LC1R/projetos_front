import { IconType } from "react-icons/lib"
import { NavLink } from "react-router"

type SidebarItemProps = {
    icon: IconType
    label: string,
    url: string
}

export function ItemSidebar({icon: Icon, label, url}:SidebarItemProps){

    return(
        <NavLink 
            to={url}
            className={({isActive}) => isActive ? "text-he-green-400" : "text-he-gray-500"}
        >
            <li className="w-full grid grid-cols-[50px_1fr] justify-center ">
                <div className="place-self-center">
                    <Icon className="text-he-green-700 text-[20px]"/>
            </div>
                <span className="place-self-start  font-medium hover:text-he-green-600">{label}</span>
            </li>
        </NavLink>
    )
}
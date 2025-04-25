//Variaveis de armazenamento
const SIDEBAR = "@horaExtraAuthSidebar";

type SidebarStatus = "open" | "close"

export const getSidebar = () => {
   return localStorage.getItem(SIDEBAR) ?? 'open'
}

export const setSidebar = (status:SidebarStatus) => {
   localStorage.setItem(SIDEBAR, status)
}

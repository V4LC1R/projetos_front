import { AuthResponse } from "@services/User";

//Variaveis de armazenamento
const TOKEN = "@horaExtraAuthToken";

//responsaveis pela sessao auth
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;

export function getSession():AuthResponse | null{
  const session = localStorage.getItem(TOKEN) ?? ''

   if(!session)
    return null

  return JSON.parse(session) as AuthResponse
}

export function getToken():string 
{

  const session = getSession()

  if(!session)
    return ""

  return session?.token
}
export const login = (data:AuthResponse) => {
  localStorage.setItem(TOKEN, JSON.stringify({...data}));
};

export const logout = () => {
  localStorage.removeItem(TOKEN);
  window.location.href = "/"
};

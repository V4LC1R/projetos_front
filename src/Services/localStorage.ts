import { AuthData } from "../@types/App";

//Variaveis de armazenamento
const TOKEN = "@horaExtraAuthToken";

//responsaveis pela sessao auth
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;

export function getSession(){
  const session = localStorage.getItem(TOKEN) ?? ''

   if(!session)
    return {} as AuthData

  return JSON.parse(session) as AuthData
}

export function getToken():string
{
  return getSession().token
}
export const login = (data:AuthData) => {
  localStorage.setItem(TOKEN, JSON.stringify({...data}));
};

export const logout = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload()
};

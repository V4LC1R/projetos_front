import { NavLink } from "react-router";
import { InputCustom } from "@components/Input";
import { useUser } from "@context/UserContext";
import { useState } from "react";
import { isStrongPassword } from "@services/Format/Regex";

export function SignIn(){

    const {SignIn} = useUser()

    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [error,setError] = useState({has:false,message:''})

    async function handleSignIn(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()

        let err = {has:false,message:''}

        if(password.length <= 0 || email.length <= 0) {
            err = {has:true,message:'Alguma informacao faltou, verifique as credenciais'}
            return setError(()=>err)
        }
            
        setError(()=>err)

        SignIn({email,password})
        .then(()=>{
            location.href = "/app/finder"
        })
        .catch(()=>{
            err = {has:true,message:'Ocorreu um erro no login!'}
            return setError(()=>err)
        }) 
    }

    return(
       <>
            <div className="flex flex-col gap-2 text-white">
                <InputCustom
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    lable="E-mail"
                    className="bg-white p-3 text-gray-900"
                    placeholder="seu@email.com" 
                />
                <InputCustom
                    type="password"
                    lable="Senha"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    className="bg-white p-3 text-gray-900"
                    placeholder="Digite a sua senha"
                />
                {
                    error.has &&
                        (
                            <span className="p-1">
                                {error.message}
                            </span>
                        )
                }
            </div>

            <div>
                <button
                    onClick={(e)=>handleSignIn(e)}
                    className="bg-he-green-400 hover:bg-he-green-500 transition font-bold w-full rounded p-[0.7rem] text-white cursor-pointer"
                >
                    Login
                </button>

                <div className="mt-4 text-left ">
                    <NavLink 
                        to="/register" 
                        className="text-sm text-white transition hover:text-he-green-50 cursor-pointer"
                    >
                        Não tem conta cadastre-se
                    </NavLink>
                </div>
            </div>
       </>
    )
}
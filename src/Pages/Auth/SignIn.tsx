import { NavLink } from "react-router";
import LoginImage from "@assets/loginImage.png"
import { PiCoffeeFill } from "react-icons/pi";
import { InputCustom } from "@components/Input";
import { useUser } from "@context/UserContext";
import { useState } from "react";

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

        SignIn({email,password
        })
        .catch(()=>{
            err = {has:true,message:'Ocorreu um erro no login!'}
            return setError(()=>err)
        }) 
    }

    return(
        <div className=" h-[100svh] w-[100svw] grid md:grid-cols-5">
            <div className="hidden md:flex md:col-span-3 h-full w-full flex-col text-center items-center justify-center">
                <img className=" w-[650px] h-[600px]" src={LoginImage} alt="" />
            </div>

            <div className="col-span-2 flex flex-row h-full w-full px-6 text-left justify-center">
                <form className="h-[95%] max-h-[900px] pt-40 w-full max-w-[500px] self-center shadow-xl bg-green-600 rounded-xl p-8 flex flex-col gap-6">
                    <header className="w-full text-center text-white">
                    
                            <span className="text-3xl pr-35 md:pr-40 align-baseline font-[200]">Hora</span>
                            
                            <div className="text-6xl flex w-full align-baseline justify-center">
                                <strong className="font-bold">Extra</strong>
                            </div>
                        
                    </header>
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
                            className="bg-green-500 hover:bg-emerald-600 transition font-bold w-full rounded p-[0.7rem] text-white cursor-pointer"
                        >
                            Login
                        </button>

                        <div className="mt-4 text-left ">
                            <NavLink 
                                to="/register" 
                                className="text-sm text-green-200 transition hover:text-emerald-400 cursor-pointer"
                            >
                                Não tem conta cadastre-se
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
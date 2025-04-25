import { NavLink } from "react-router";
import { InputCustom } from "../../Components/Input";
import { useUser } from "@context/UserContext";
import { useState } from "react";

export function SignUp(){

        const {SignUp} = useUser()

        const [name,setName] = useState<string>('');
        const [email,setEmail] = useState<string>('');
        const [password,setPassword] = useState<string>('');
        const [confirmPassword,setConfirmPassword] = useState<string>('');
        const [error,setError] = useState({has:false,message:''})
    
        async function handleSignUp(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
            e.preventDefault()
            let err = {has:false,message:''}
    
            if(password.length <= 0 ||password != confirmPassword || email.length <= 0 || name.length <= 0) {
                err = {has:true,message:'Alguma informação esta errada ou faltou, verifique os dados'}
                return setError(()=>err)
            }
                
            setError(()=>err)
    
            SignUp({email,password,name})
                .catch(()=>{
                    err = {has:true,message:'Ocorreu um erro no cadastro!'}
                    return setError(()=>err)
                }) 
        }

    return(
        <>
            <div className="flex flex-col gap-2 text-white">
                <InputCustom
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    type="text"
                    lable="Nome"
                    className="bg-white p-3 text-gray-900"
                    placeholder="Seu nome" 
                />
                <InputCustom
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    type="email"
                    lable="E-mail"
                    className="bg-white p-3 text-gray-900"
                    placeholder="seu@email.com" 
                />
                <InputCustom
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    type="password"
                    lable="Senha"
                    className="bg-white p-3 text-gray-900"
                    placeholder="Digite a sua senha"
                />
                <InputCustom
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    type="password"
                    lable="Confirme a Senha"
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
                    onClick={e=>handleSignUp(e)}
                    className="bg-he-green-400 hover:bg-he-green-500 transition font-bold w-full rounded p-[0.7rem] text-white cursor-pointer"
                >
                    Cadastrar
                </button>

                <div className="mt-4 text-left ">
                    <NavLink 
                        to="/" 
                        className="text-sm  text-white transition hover:text-he-green-50 cursor-pointer"
                    >
                        já tem conta ? Faca o Login!
                    </NavLink>
                </div>
            </div>
        </>
    )
}
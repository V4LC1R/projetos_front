import { SignIn } from "@pages/Auth/SignIn";
import { SignUp } from "@pages/Auth/SignUp";
import { AdminDashboard } from "@pages/Dashboard/AdminDashboard";
import { UserDashboard } from "@pages/Dashboard/UserDashboard";
import { getSession, isAuthenticated } from "@services/localStorage";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { DashLayout } from "./Layout/DashLayout";


export function Router(){
    const {user} = getSession()

    return(
        <BrowserRouter >
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/register" element={<SignUp/>}/>
                    <Route index path="/" element={<SignIn/>}/>
                    <Route path="/dashboard" element={ <DashLayout/>}>
                        <Route path="/dashboard" element={  <UserDashboard/> }/>
                        <Route path="/dashboard/admin" element={<AdminDashboard/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
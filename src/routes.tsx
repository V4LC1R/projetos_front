import { SignIn } from "@pages/Auth/SignIn";
import { SignUp } from "@pages/Auth/SignUp";

import { FinderPage } from "@pages/Finder";

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./Layout/AppLayout";
import { AuthLayout } from "./Layout/AuthLayout";
import { NotFound } from "./Pages/Errors/NotFound";
import { AreaPage } from "@pages/Area";

export function Router(){

    return(
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Routes >
                   <Route path="/auth" element={<AuthLayout/>}>
                        <Route path="/auth/register" element={<SignUp/>}/>
                        <Route index path="/auth" element={<SignIn/>}/>
                    </Route>
                    <Route path="/" element={ <AppLayout/> }>
                        <Route path="/:search?" element={<FinderPage/> }/>
                        <Route path="/area/:id" element={<AreaPage/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
import { SignIn } from "@pages/Auth/SignIn";
import { SignUp } from "@pages/Auth/SignUp";

import { FinderPage } from "@pages/Finder";

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./Layout/AppLayout";
import { AuthLayout } from "./Layout/AuthLayout";
import { NotFound } from "./Pages/Errors/NotFound";
import { AreaPage } from "@pages/Area";
import { NotificationPage } from "@pages/Notifications";

export function Router(){

    return(
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/auth" element={<AuthLayout/>}>
                        <Route path="/auth/register" element={<SignUp/>}/>
                        <Route index path="/auth" element={<SignIn/>}/>
                    </Route>

                    <Route path="/app" element={ <AppLayout/> }>
                        <Route index path="/app/finder/:search?" element={<FinderPage/> }/>
                        <Route path="/app/area/:id" element={<AreaPage/>}/>
                        <Route path="/app/requests" element={<NotificationPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>

                <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
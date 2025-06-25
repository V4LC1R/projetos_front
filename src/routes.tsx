import { SignIn } from "@pages/Auth/SignIn";
import { SignUp } from "@pages/Auth/SignUp";

import { EventAndAreaSearch } from "@pages/Finder";

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./Layout/AppLayout";
import { AuthLayout } from "./Layout/AuthLayout";
import { NotFound } from "./Pages/Errors/NotFound";
import { AreaPage } from "@pages/Area";
import { MyAreasPage } from "@pages/Area/MyAreas";
import { ProfileAreaPage } from "@pages/Area/ProfileArea";
import { AreasRequest } from "@pages/Request/AreasRequest";
import { GuestRequest } from "@pages/Request/GuestRequest";

export function Router(){

    return(
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/app" element={ <AppLayout/> }>
                        <Route index path="/app/finder" element={<EventAndAreaSearch/> }/>
                        <Route path="/app/area/:id" element={<AreaPage/>}/>
                        <Route path="/app/requests" element={<AreasRequest/>}/>
                        <Route path="/app/my-requests" element={<GuestRequest/>}/>
                        <Route path="/app/my-areas" element={<MyAreasPage/>}/>
                        <Route path="/app/my-area/:id?" element={<ProfileAreaPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>

                    <Route path="*" element={<NotFound/>}/>

                    <Route  path="/" element={<AuthLayout/>}>
                        <Route path="/register" element={<SignUp/>}/>
                        <Route index path="/" element={<SignIn/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
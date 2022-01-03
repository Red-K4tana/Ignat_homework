import React from 'react'
import Header from './Header'
import {HashRouter, Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/juniorPlus',
}

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior />}/>
                    <Route path={'/'} element={<PreJunior />}/>
                    <Route path={PATH.JUNIOR} element={<Junior />}/>
                    <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />}/>
                    <Route path={'/*'} element={<Error404 />}/>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default HW5

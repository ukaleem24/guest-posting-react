import React from "react";
import { Route,Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import SearchForPublishers from "pages/buyer/SearchForPublishers";



const Router=()=>{
    return(
        <>
        <Routes>
            <Route path='/landingPage' element={<LandingPage/>} />
            <Route path='/marketer/publishers' element={<SearchForPublishers/>} />
        </Routes>
        </>
    )
}
export default Router;
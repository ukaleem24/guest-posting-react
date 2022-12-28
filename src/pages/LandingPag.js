import React from "react";
import { NavLink } from "react-router-dom";


const LandingPage=()=>{

    


    return(
        <>
        <h1>LAnding Page</h1>
        <div>
        <h1><NavLink to="/marketer/publishers"> Go To Dashboard</NavLink></h1>
        </div>
        </>

    )
}

export default LandingPage;
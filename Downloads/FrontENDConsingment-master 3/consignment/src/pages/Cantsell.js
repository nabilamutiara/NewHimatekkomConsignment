import "./Cantsell.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Cantsell = () => {
    const navigate = useNavigate();
    return (
        <>  
        <div className="allcantsell">
            <div className="backlogin" onClick={() => navigate(-1)}>
                Back
            </div>
            <div className="tulisandiatas">
                Sorry, you cannot input data if you are not logged in, please log in first.
            </div>
            <div className="tombollogin">
                <Link to="/login">Login</Link>
            </div>
        </div>
        </>
    );
};

export default Cantsell;

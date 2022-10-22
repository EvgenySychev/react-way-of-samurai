import logo from "./../../assets/images/cs_networking.jpg";
import React from "react";
import {useNavigate} from "react-router-dom";

export const HeaderLogo = () => {

    const navigate = useNavigate();

    return  <div style={{cursor: 'pointer'}}>
                <a onClick={() => {
                    navigate('/')}}>
                    <img alt={'logo'} src={logo}/>
                </a>
            </div>
}

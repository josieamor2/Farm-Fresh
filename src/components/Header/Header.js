import React from "react";
import { Parallax, Background} from 'react-parallax';
import "./Header.css";

export const Header = props => (

    <div className="header">
        <Parallax strength={400}>
        
            <Background className="custom-bg">
                <img src={`/images/${props.image}`} alt={props.image} />
            </Background>
            <h1 className="page-title ">{props.title}</h1>
        {props.children}
        </Parallax>
    </div>


);
export default Header;

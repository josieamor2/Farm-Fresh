import React from "react";
import { Parallax, Background} from 'react-parallax';
import "./Header.css";

const Header = () => (

    <div className="header">
        <Parallax strength={400}>
        
            <Background className="custom-bg">
                <img src="/images/learn.jpg" alt="carrots" />
            </Background>
            <h1 className="page-title ">LEARN</h1>
        </Parallax>
        
    </div>


);
export default Header;

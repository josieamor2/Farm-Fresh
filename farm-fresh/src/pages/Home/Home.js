import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../../components/Nav";

class Home extends Component {
    render() {
        return (
            
            <div className="Home">
            <Nav />
                <video autoPlay loop id="video-background" muted >
                    <source src={'../videos/background.mp4'} type="video/mp4" />
                </video>
                <div className="homepage">
                    <div className="row">
                        <div className="col-8 offset-2 align-middle logo-center">
                            <h1 className="title-home">FARM<br /><span>FRESH</span></h1>
                            <p>ORGANICALLY GROWN JUST FOR YOU</p>
                        </div>
                    </div>
                    <div className="button ">
                        <Link className="get-started" to='/'>get started</Link>
                        <Link className="get-started" to='/Learn'>learn more</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import "./GetStarted.css";

class GetStarted extends Component {
    render() {
        return (

            <div>
                <Nav />

                <Header title={'GET STARTED'} image={'get-started.jpg'}>

                    <div className="full-row">
                        <ProgressBar />
                        <div className="get-started-1 container">
                            <form>
                                <div className="center-row location col-lg-6 ">
                                    <div className="row">
                                        <h3 className="col-lg-3">LOCATION:</h3>
                                        <input className="col-lg-9" type="text" name="location" />
                                    </div>


                                    <h3 className="col-lg-12 q-2">WHAT WOULD YOU LIKE TO DO?</h3>
                                    <div className="row d-flex justify-content-between">
                                        <a href="">
                                            <div className="ball-2"><p>START A GARDEN?<br></br><span>starting at $39.95/month</span></p></div>
                                        </a>
                                        <a href="">
                                            <div className="ball-2"><p>BUY FROM THE PROFESSIONALS</p></div>
                                        </a>
                                        <a href="">
                                            <div className="ball-2"><p>BUY THE GOODS</p></div>
                                        </a>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>

                </Header>
            </div >
        );
    }
}

export default GetStarted;
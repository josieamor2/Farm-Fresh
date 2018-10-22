import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import "./Learn.css";

class Learn extends Component {
    render() {
        return (

            <div>
                <Nav />
                <Header />
                <div className="container">
                <div className="learn col-lg-5">
                <h2 className="learn-h2">DO YOU WANT TO EAT ORGANICALLY BUT DON'T HAVE ROOM TO GROW OR KNOW WHERE TO GET THOSE TASTY GOODS?</h2>
                <div className="learn-p">
                <p >Farm Fresh is all about connecting farmers and consumers looking to produce pesticide-free organically grown fresh foods. </p><p> As our culture grows, we are learning what is healthy for us and what is not. Science is aiding us in discovering that foods that are grown in the most natural state are what we need.</p>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Learn;
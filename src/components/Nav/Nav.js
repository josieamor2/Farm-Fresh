import React from "react";
import "./Nav.css";



const Nav = () => (
    <nav class="navbar navbar-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/get-started">GET STARTED</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/learn">LEARN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BROWSE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">LOGIN</a>
                </li>

            </ul>
        </div>
        <a className="logo" href="/"> FARM FRESH</a>
    </nav>


);



export default Nav;


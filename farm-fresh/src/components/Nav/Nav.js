import React from "react";
import "./Nav.css";



const Nav = () => (
<nav class="navbar bg-dark navbar-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">SHOP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">LEARN</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">BROWSE</a>
      </li>    
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>    
      <li class="nav-item">
        <a class="nav-link" href="#">GET STARTED</a>
      </li>    
    </ul>
  </div>  
</nav>


);



export default Nav;


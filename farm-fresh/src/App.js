import React, { Component } from 'react';
// import { Player } from 'video-react';
// import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";

// import * from '../public/videos'

class App extends Component {
  render() {
    return (
      <div className="App">

        
          <video autoPlay loop id="video-background" muted >
            <source src={'../videos/background.mp4'} type="video/mp4" />
          </video>
        
        <div className="homepage">
          <div className="row">
            <div className="col-8 offset-2 align-middle logo-center">
              <h1 className="title-home">FARM<br/><span>FRESH</span></h1>
              <p>ORGANICALLY GROWN JUST FOR YOU</p>
              
            </div>

          </div>
          <div className="center">
          <button>get started</button>
          </div>
        </div>



      </div>
    );
  }
}

export default App;

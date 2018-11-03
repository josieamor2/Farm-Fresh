import React from "react";
import "./ProgressBar.css";

export const ProgressBar = props => (

    <div className="progress-line ">
        <div className="progress col-lg-6" >
            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <div className="center-row balls col-lg-6 d-flex justify-content-between">

            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>

        </div>
        
        {props.children}
    </div>


);
export default ProgressBar;
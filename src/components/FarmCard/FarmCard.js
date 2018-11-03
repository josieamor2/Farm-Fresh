import React from "react";
import "./FarmCard.css";

export const FarmCard = props => {

    console.log("Functional Component:", props);

    return (
        <div className="farm">

            <div className="farm-card">
                <a className="farm-link" href={`/farm/${props.farmData.id}`}>
                <div className="overlay">
                <img src={`/images/${props.farmData.Image}`} alt={props.FarmName} />
                </div>
                <div className="middle">
                    
                    <h2>{props.farmData.Name}</h2>
                    </div>
                </a>
            </div>
        </div>

    )
}

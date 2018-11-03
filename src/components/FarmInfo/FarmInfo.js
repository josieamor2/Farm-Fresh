
import React from "react";
import "./FarmInfo.css";

export const FarmInfo = props => {

    console.log("Functional Component:", props);
    let fruits = props.Fruits;
    let vegetables = props.Vegetables;
    let herbs = props.Herbs;
    return (
        <div className="container farm-container">
            <div className="farm col-lg-12">
                {/* works!!! <div>{props.Name}</div> */}
                <img className="col-lg-4" src={`/images/${props.Image}`} alt={props.Name} />
                <div className="col-lg-8 about">
                    <h2>ABOUT</h2>
                    <p >{props.About}</p>
                    <button className="checkout-button col-lg-6" onClick="/checkout">BUY A GARDEN FROM {props.Name} >></button>
                </div>
                
            </div>
            <div className="row col-lg-12">
                <h2 className="fruitsTitle">FRUITS</h2>
                {console.log('hey', fruits)}
                <div className=" col-lg-12">
                    {fruits !== undefined ? fruits.map(i => <div className="each"><p className="eachFruit" key={i}>{i}</p></div>) : null}
                </div>
            </div>
            <div className="row col-lg-12">
                <h2 className="fruitsTitle">VEGETABLES</h2>
                {console.log('hey', vegetables)}
                <div className=" col-lg-12">
                    {vegetables !== undefined ? vegetables.map(i => <div className="each"><p className="eachFruit" key={i}>{i}</p></div>) : null}
                </div>
            </div>
            <div className="row col-lg-12 bottom">
                <h2 className="fruitsTitle">HERBS</h2>
                {console.log('hey', herbs)}
                <div className=" col-lg-12">
                    {herbs !== undefined ? herbs.map(i => <div className="each"><p className="eachFruit" key={i}>{i}</p></div>) : null}
                </div>
            </div>
        </div>

    )
}

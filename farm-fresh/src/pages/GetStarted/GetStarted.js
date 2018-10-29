import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import FarmCard from "../../components/FarmCard";
import db from '../../firebase';
import "./GetStarted.css";

class GetStarted extends Component {
    state = {
        search: false,
        farms: []
    }

    componentDidMount() {
        db.collection('farms').get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data());
            })
        });

        const query = db.collection('farms').where('Location', '==', 'Florida');
        query.get().then(snapshot => {
            const farmArray = [];
            snapshot.forEach(doc => {
                farmArray.push(doc.data());
            });

            console.log(farmArray);

            this.setState({
                farms: farmArray
            });
        })
    }

    handleClick = () => {
        this.setState({
            search: true
        })
    }

    render() {

        console.log(this.state);

        return (

            <div>
                {
                    this.state.search === false ? (
                        <div>
                            <Nav />
                            <Header title={'GET STARTED'} image={'get-started.jpg'}>
                                <div className="full-row">
                                    <ProgressBar />
                                    <div className="get-started-1 container">
                                        <form>
                                            <div className="center-row location col-lg-6 ">
                                                <div className="row">
                                                    <h3 className="col-lg-12">YOUR LOCATION:</h3>
                                                    <div className="form-group">
                                                        <div className="col-lg-12">
                                                            <select className="form-control" id="state" name="state">
                                                                <option value="">N/A</option>
                                                                <option value="AK">Alaska</option>
                                                                <option value="AL">Alabama</option>
                                                                <option value="AR">Arkansas</option>
                                                                <option value="AZ">Arizona</option>
                                                                <option value="CA">California</option>
                                                                <option value="CO">Colorado</option>
                                                                <option value="CT">Connecticut</option>
                                                                <option value="DC">District of Columbia</option>
                                                                <option value="DE">Delaware</option>
                                                                <option value="FL">Florida</option>
                                                                <option value="GA">Georgia</option>
                                                                <option value="HI">Hawaii</option>
                                                                <option value="IA">Iowa</option>
                                                                <option value="ID">Idaho</option>
                                                                <option value="IL">Illinois</option>
                                                                <option value="IN">Indiana</option>
                                                                <option value="KS">Kansas</option>
                                                                <option value="KY">Kentucky</option>
                                                                <option value="LA">Louisiana</option>
                                                                <option value="MA">Massachusetts</option>
                                                                <option value="MD">Maryland</option>
                                                                <option value="ME">Maine</option>
                                                                <option value="MI">Michigan</option>
                                                                <option value="MN">Minnesota</option>
                                                                <option value="MO">Missouri</option>
                                                                <option value="MS">Mississippi</option>
                                                                <option value="MT">Montana</option>
                                                                <option value="NC">North Carolina</option>
                                                                <option value="ND">North Dakota</option>
                                                                <option value="NE">Nebraska</option>
                                                                <option value="NH">New Hampshire</option>
                                                                <option value="NJ">New Jersey</option>
                                                                <option value="NM">New Mexico</option>
                                                                <option value="NV">Nevada</option>
                                                                <option value="NY">New York</option>
                                                                <option value="OH">Ohio</option>
                                                                <option value="OK">Oklahoma</option>
                                                                <option value="OR">Oregon</option>
                                                                <option value="PA">Pennsylvania</option>
                                                                <option value="RI">Rhode Island</option>
                                                                <option value="SC">South Carolina</option>
                                                                <option value="SD">South Dakota</option>
                                                                <option value="TN">Tennessee</option>
                                                                <option value="TX">Texas</option>
                                                                <option value="UT">Utah</option>
                                                                <option value="VA">Virginia</option>
                                                                <option value="VT">Vermont</option>
                                                                <option value="WA">Washington</option>
                                                                <option value="WI">Wisconsin</option>
                                                                <option value="WV">West Virginia</option>
                                                                <option value="WY">Wyoming</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="col-lg-12 q-2">WHAT ARE YOU LOOKING TO DO?</h3>
                                                <div className="row d-flex justify-content-between">
                                                    <a href="">
                                                        <div className="ball-2"><p>START A GARDEN?<br></br><span>starting at $39.95/month</span></p></div>
                                                    </a>
                                                    <a href="">
                                                        <div className="ball-2"><p>BUY FROM THE PROFESSIONALS</p></div>
                                                    </a>
                                                </div>
                                                <div className="next col-lg-12">
                                                    <div className="continue-style col-lg-6" onClick={this.handleClick}>Continue >></div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </Header>
                        </div>
                    ) : (
                        
                            // <div>
                            //     {this.state.farms.map(farm => (
                            //         <div>
                            //             {farm.Location}
                            //             <FarmCard  />
                            //         </div>
                            //     ))}
                            // </div>

                            <div>
                            <Nav />
                            <Header title={'GET STARTED'} image={'get-started.jpg'}>
                                <div className="full-row">
                                    <ProgressBar />
                                    <div className="get-started-1 container">
                                        <FarmCard />

                                    </div>
                                </div>
                            </Header>
                        </div>
                        )
                }
            </div >
        );
    }
}

export default GetStarted;
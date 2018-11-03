import React, { Component } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import { FarmCard } from "../../components/FarmCard";
import db from '../../firebase';
import "./GetStarted.css";

class GetStarted extends Component {
    state = {
        search: false,
        farms: [],
        Location: '',
        userChoice: '',
        id: ''

    }

    componentDidMount() {
        console.log(this.props);
    }

    handleUserSubmit = e => {
        console.log(this.state);
        e.preventDefault();
        const location = this.state.Location;
        const farms = [];


        const query = db.collection('farms').where('Location', 'array-contains', location);
        query.get().then(snapshot => {
            snapshot.forEach(doc => {
                farms.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            console.log(farms);

            this.setState({
                farms,
                search: true
            });
        })
    }

    handleUserInput = e => {
        e.preventDefault();
        const { value, name } = e.target;
        this.setState({
            [name]: value

        })

    }
    // function purchase(value) {
    //     if(value === "garden"){
    //         this.setState({

    //         })
    //     }

    //   }

    render() {

        // console.log(this.state);

        return (

            <div>
                {
                    this.state.search === false ? (
                        <div>
                            <Nav />
                            <Header title={'GET STARTED'} image={'get-started.jpg'}>
                                <div className="full-row">
                                    
                                    <div className="get-started-1 container">

                                        <div>
                                            <div className="center-row location col-lg-6 ">
                                                <div className="row">
                                                    <h3 className="col-lg-12">YOUR LOCATION:</h3>
                                                    <div className="form-group">
                                                        <div className="col-lg-12">
                                                            <select onChange={this.handleUserInput} className="form-control" id="state" name="Location" >
                                                                <option value="">N/A</option>
                                                                <option value="Alabama">Alabama</option>
                                                                <option value="Arkansas">Arkansas</option>
                                                                <option value="Arizona">Arizona</option>
                                                                <option value="California">California</option>
                                                                <option value="Colorado">Colorado</option>
                                                                <option value="Connecticut">Connecticut</option>
                                                                <option value="DC">District of Columbia</option>
                                                                <option value="Delaware">Delaware</option>
                                                                <option value="Florida">Florida</option>
                                                                <option value="Georgia">Georgia</option>
                                                                <option value="Iowa">Iowa</option>
                                                                <option value="Idaho">Idaho</option>
                                                                <option value="Illinois">Illinois</option>
                                                                <option value="Indiana">Indiana</option>
                                                                <option value="Kansas">Kansas</option>
                                                                <option value="Kentucky">Kentucky</option>
                                                                <option value="Louisiana">Louisiana</option>
                                                                <option value="Massachusetts">Massachusetts</option>
                                                                <option value="Maryland">Maryland</option>
                                                                <option value="Maine">Maine</option>
                                                                <option value="Michigan">Michigan</option>
                                                                <option value="Minnesota">Minnesota</option>
                                                                <option value="Missouri">Missouri</option>
                                                                <option value="Mississippi">Mississippi</option>
                                                                <option value="Montana">Montana</option>
                                                                <option value="North Carolina">North Carolina</option>
                                                                <option value="North Dakota">North Dakota</option>
                                                                <option value="Nebraska">Nebraska</option>
                                                                <option value="New Hampshire">New Hampshire</option>
                                                                <option value="New Jersey">New Jersey</option>
                                                                <option value="New Mexico">New Mexico</option>
                                                                <option value="Nevada">Nevada</option>
                                                                <option value="New York">New York</option>
                                                                <option value="Ohio">Ohio</option>
                                                                <option value="Oklahoma">Oklahoma</option>
                                                                <option value="Oregon">Oregon</option>
                                                                <option value="Pennsylvania">Pennsylvania</option>
                                                                <option value="Rhode Island">Rhode Island</option>
                                                                <option value="South Carolina">South Carolina</option>
                                                                <option value="South Dakota">South Dakota</option>
                                                                <option value="Tennessee">Tennessee</option>
                                                                <option value="Texas">Texas</option>
                                                                <option value="Utah">Utah</option>
                                                                <option value="Virginia">Virginia</option>
                                                                <option value="Vermont">Vermont</option>
                                                                <option value="Washington">Washington</option>
                                                                <option value="Wisconsin">Wisconsin</option>
                                                                <option value="Wwest Virginia">West Virginia</option>
                                                                <option value="Wyoming">Wyoming</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="col-lg-12 q-2">WHAT ARE YOU LOOKING TO DO?</h3>
                                                <div className="row d-flex justify-content-between">
                                                    <div className="ball-2"><button onClick={this.handleUserInput} name="userChoice" value="garden">START A GARDEN?<br></br><span>starting at $39.95/month</span></button></div>
                                                    <div className="ball-2"><button onClick={this.handleUserInput} name="userChoice" value="professional">BUY FROM THE PROFESSIONALS</button></div>
                                                </div>
                                                <div className="next col-lg-12">
                                                    <div className="continue-style col-lg-6" onClick={this.handleUserSubmit}>Continue >></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Header>
                        </div>
                    ) : this.state.userChoice === 'garden' ? (
                        < div >
                            <Nav />
                            <Header title={'FARMS'} image={'farms.jpg'}>
                                <div className="full-row">
                                    
                                    <div className="get-started-1 container">
                                        {/* <FarmCard /> */}
                                        {this.state.farms.map(farm => (
                                            <div className="choose">
                                                <FarmCard
                                                    farmData={farm}
                                                />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </Header>
                        </div>
                    ) : (
                        < div >
                            <Nav />
                            <Header title={'SHOP'} image={'farms.jpg'}>
                                <div className="full-row">
                                    <ProgressBar />
                                    <div className="get-started-1 container">
                                        
                                        {this.state.farms.map(farm => (
                                            <div>
                                                <FarmCard
                                                    farmData={farm}
                                                />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </Header>
                        </div>
                    )
                }
            </div >
        )
    }
}

export default GetStarted;
import React, { Component } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import { FarmInfo } from "../../components/FarmInfo";
import db from '../../firebase';
import "./Farm.css";

class Farm extends Component {
    state = {
        farm: {},
        Name: '',
        Vegetables: {},
        Fruits: {},
        Herbs: {},
        About: ''

    }

    componentDidMount() {
        console.log('Farm ID:', this.props.match.params.id);
        db.collection('farms').doc(this.props.match.params.id).get().then(res => {
            console.log(res.data());
            this.setState({
                farm: res.data(),
                ...res.data()

            })
        });
    }

    render() {

        // console.log(this.state);

        return (
            <div>
                <Nav />
                <Header title={this.state.farm.Name} image={'farm-background.jpg'}>
                    <div className="full-row">
                        
                        <div>
                                <FarmInfo  Name={this.state.farm.Name} Image={this.state.farm.Image} About={this.state.farm.About} Fruits={this.state.farm.Fruits} Vegetables={this.state.farm.Vegetables} Herbs={this.state.farm.Herbs}/>
                            </div>
{/* <div>
                        {this.state.farms.map(farm => (
                            <div>
                                <FarmInfo farmData={farm} Name={this.state.farm.Name} />
                            </div>
                        ))}
</div> */}

                        
                    </div>
                </Header>
            </div>
        )
    }
}

export default Farm;
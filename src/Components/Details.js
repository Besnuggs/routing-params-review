import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom'

class Details extends Component {
    constructor(){
        super()
            this.state={
                details:[]
            }
    }
//this.props.match.params
componentDidMount(){
    axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`).then((res) => {
        this.setState({details: res.data})
    })
}
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Details</h1>
                <h2>{this.state.details.name}</h2>
                <h2>{this.state.details.height}</h2>
                <h2>{this.state.details.mass}</h2>
               <h2>{this.state.details.hair_color}</h2>
               <h2>{this.state.details.birth_year}</h2>
               <h2>{this.state.details.gender}</h2>
              <Link to="/.."><button>Back</button></Link>

            </div>
        );
    }
}
export default Details;

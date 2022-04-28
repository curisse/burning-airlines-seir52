import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FlightList from './FlightList';
import SearchForm from './SearchForm';


const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            origin: [],
            destination:[],
            isURLValid: true,
        }
        this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    }

    searchSubmitHandler(inputData){
        console.log(inputData);
        axios.get(SERVER_URL, { params: {origin: inputData.origin, destination: inputData.destination } } ).then((response) => {
            console.log(response.data);
            if(response.status === 404){
                this.setState({isURLValid : false});
                return;
            }

            this.setState({origin: response.data});
            this.setState({destination: response.data});
            this.setState({isURLValid: true});
        });

    }

    render() {

        return(
            
            <div>
                <h1>Flight Search</h1>
                <SearchForm onSaveSearchData={this.searchSubmitHandler}/>
                <FlightList/>
            </div>
        )
    }
}

export default Search;


// const flightParams = {
//     origin: {origin: response.data},
//     destination: {destination: response.data},
// };





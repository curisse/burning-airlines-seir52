import React, {Component} from 'react';

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
        //make an AJAX request
        // create URL
        
        
        axios.get(SERVER_URL, ).then((response)=> {
            console.log(response);
            if(response.status === 404){
                this.setState({isURLValid : false});
                return;
            }
            const newList = [...this.state.stargazers,response.data];
            console.log(newList);
            this.setState({stargazers : response.data});
            this.setState({isURLValid: true});
        });
        

    }

    render(){
        return(
            <div>
                <SearchForm onSaveSearchData={this.searchSubmitHandler}/>
                <FlightList/>
            </div>
        )
    }
}

export default Search;
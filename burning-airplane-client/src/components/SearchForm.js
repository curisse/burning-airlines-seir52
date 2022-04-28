import React, {Component} from "react";

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state={
            origin:"",
            destination:"",
        };
        this._submitHandler = this._submitHandler.bind(this);
        this._originChangeHandler = this._originChangeHandler.bind(this);
        this._destinationChangeHandler = this._destinationChangeHandler.bind(this);
    }

    _originChangeHandler(event){
        this.setState({origin: event.target.value});
    }
    _destinationChangeHandler(event) {
        this.setState({destination: event.target.value});
    }

    _submitHandler(event) {
        event.preventDefault();
        const inputData ={

        }


    }


    render(){
        const {enteredoriginLocation,enteredDestination} = this.state;
        return(
            <form onSubmit={this._submitHandler}>
                <label>origin: </label>
                <input type="text" required  defaultValue={enteredoriginLocation || ""} onChange={this._originChangeHandler}></input>
                <label>To: </label>
                <input type="text" required defaultValue={enteredDestination || ""} onChange={this._destinationChangeHandler}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;
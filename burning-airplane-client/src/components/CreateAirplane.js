import React, {Component} from 'react';
import axios from 'axios';

class CreateAirplane extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            rows:"",
            cols:"",
        };
        this._submitHandler = this._submitHandler.bind(this);
        this._nameChangeHandler = this._nameChangeHandler.bind(this);
        this._rowsChangeHandler = this._rowsChangeHandler.bind(this);
        this._colsChangeHandler = this._colsChangeHandler.bind(this);
    }

    _nameChangeHandler(event){
        this.setState({name: event.target.value});
    }
    _rowsChangeHandler(event) {
        this.setState({rows: event.target.value});
    }
    _colsChangeHandler(event) {
        this.setState({cols: event.target.value});
    }

    _submitHandler(event) {
        event.preventDefault();
        const inputData ={
            name: this.state.name,
            rows: this.state.rows,
            cols: this.state.cols,
        }

        this.props.onSaveAirplane(inputData);
    }


    render(){
        const {enteredName,enteredRows, enteredCols} = this.state;
        return(
            <form onSubmit={this._submitHandler}>
                <br></br>
                <label>Name: </label>
                <input type="text" required  defaultValue={enteredName || ""} onChange={this._nameChangeHandler}></input>
                <br></br>
                <label>Rows: </label>
                <input type="number" required defaultValue={enteredRows || ""} onChange={this._rowsChangeHandler}></input>  
                <br></br>              
                <label>Cols: </label>
                <input type="number" required defaultValue={enteredCols || ""} onChange={this._colsChangeHandler}></input>
                <br></br>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default CreateAirplane;
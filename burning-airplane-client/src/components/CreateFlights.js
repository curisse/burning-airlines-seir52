import React, {Component} from 'react';

class CreateFlights extends Component {
    constructor() {
        super();
        this.state = { 
            origin: '',
            destination: '',
            date: '',
            flight_number: ''
        };
        
        this._originHandleChange = this._originHandleChange.bind(this);
        this._destinationHandleChange = this._destinationHandleChange.bind(this);
        this._dateHandleChange = this._dateHandleChange.bind(this);
        this._flightNumberHandleChange = this._flightNumberHandleChange.bind(this);


        
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _originHandleChange(event) {
        this.setState({origin: event.target.value});
    }

    _destinationHandleChange(event) {
        this.setState({destination: event.target.value});
    }

    _dateHandleChange(event) {
        this.setState({date: event.target.value});
    }

    _flightNumberHandleChange(event) {
        this.setState({number: event.target.value});
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log('flight created', this.state.content);
        //TO DO: call the prop passed in from parent
        this.props.onSubmit(this.state.content);
        this.setState({content: ''}); //clear form
    }

    render(){

        return(
            
            <form onSubmit={this._handleSubmit}>
            <h1>Create Flight</h1>
                        <br></br>
                <textarea onChange={ this._handleChange} value={this.state.content}></textarea>
                        <br></br>
                    <input type="submit" value="Flight Origin"></input>
                        <br></br><br></br>

                <textarea onChange={ this._handleChange} value={this.state.content}></textarea>
                        <br></br>
                    <input type="submit" value="Flight Destination"></input>
                        <br></br><br></br>

                <textarea onChange={ this._handleChange} value={this.state.content}></textarea>
                        <br></br>
                    <input type="submit" value="Flight Date"></input>
                        <br></br><br></br>

                <textarea onChange={ this._handleChange} value={this.state.content}></textarea>
                        <br></br>
                    <input type="submit" value="Flight Number"></input>
            </form>
        );
    }
}

export default CreateFlights
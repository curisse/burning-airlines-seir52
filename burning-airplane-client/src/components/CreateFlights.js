import React, {Component} from 'react';

class CreateFlights extends Component {
    constructor() {
        super();
        this.state = { content: ''};
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event) {
        this.setState({content: event.target.value});
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log('flight created', this.state.content);
        //TO DO: call the prop passed in from parent
        this.props.onSubmit(this.state.content);
        this.setState({content: ''}); //clear form
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>

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
//in a functional component we don't have 'this'
const SecretList = (props) => {
    
    return(
        <div>
             <p>{props.secrets.length} secrets</p>
                {props.secrets.map((s) => (
                    <p key={s.id}>{s.content}
            </p> 
            
            ))}

        </div>
    ); // not using curly brackets means implicit return -- don't need to type return
};


export default CreateFlights;
import React,   {Component} from 'react';
import {Link} from 'react-router-dom';
import CreateAirplane from './CreateAirplane'

const AIRPLANE_SERVER_URL = 'http://localhost.'
class Airplane extends Component {
    constructor(){
        super();
        this.state={
            plane: [],
            isEditing: true,
        }
        this.saveAirplaneHandler = this.saveAirplaneHandler.bind(this);
        this.startEditingHandler = this.startEditingHandler.bind(this);
        this.stopEditingHandler = this. stopEditingHandler.bind(this);
    }
    saveAirplaneHandler = (inputData) => {

        this.setState({isEditing: true});
    }
    startEditingHandler = () => {
        this.setState({isEditing: true});
    }
    stopEditingHandler = () => {
        this.setState({isEditing: false});
    }

    render(){
        const isEditing = this.state.isEditing;
        return(
            <div>
                {!isEditing && (
                    <button onClick={this.startEditHandler}>Add New Airplane</button> 
                )}
                {isEditing && (
                    <CreateAirplane 
                        onSaveAirplane={this.saveAirplaneHandler}
                        onCancel={this.stopEiditingHandler}
                    /> 
                )}
            </div>

        )
    }
}   

export default Airplane;
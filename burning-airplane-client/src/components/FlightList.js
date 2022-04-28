import React, {Component} from 'react';

class FlightList extends Component {
    constructor(props){
        super(props);
        this.state={
            size: 0,
        }
    }
    render(){
        let rows = [];
        for(let i = 0; i < this.state.size; i++){
            let row  = `row${i}`
        }
        return(
            <div>
                {/* <Link to="/flight/:id"/> */}
            </div>
        )
    }
}

export default FlightList;
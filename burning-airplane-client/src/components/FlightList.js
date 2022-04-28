import React, {Component} from 'react';

class FlightList extends Component {
    constructor(props){
        super(props);
        this.state={
            size: 0,
        }
    }
<<<<<<< HEAD
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
=======
    // render(){
    //     let rows = [];
    //     for(let i = 0; i < this.state.size; i++){
    //         let row  = `row${i}`
    //     }
    //     return(
    //         <div>
    //             {/* <Link to="/flight/:id"/> */}
    //         </div>
    //     )
    // }
>>>>>>> create-airplane-component
}

export default FlightList;
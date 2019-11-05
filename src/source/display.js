import elements from './elements';
import React from 'react';
// import { extname } from 'path';

class ToDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pos: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({
            pos: (this.state.pos + 1) % 10
        });
    }

    render(){
        var ele = elements[this.state.pos].map((x) =>
            <li>{x}</li>
            );
        return(
            <div>
                <ul>{ele}</ul>
                <button onClick = {this.handleClick}>Next</button>
            </div>
        );
    }
}

export default ToDisplay;
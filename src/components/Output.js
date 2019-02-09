import React, { Component } from 'react';

class Output extends Component {
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Your Ipsum</h5>
                    <div className="card-text">{this.props.text}</div>
                </div>
            </div>
        )
    }
}
export default Output;
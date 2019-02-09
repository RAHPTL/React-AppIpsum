import React, { Component } from 'react';

class Paras extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:props.value
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="paras col">
                <label>Paras</label>
                <input type="number" className="form-control" value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}
export default Paras;
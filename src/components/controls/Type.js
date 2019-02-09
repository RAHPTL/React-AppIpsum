import React, { Component } from 'react';

class Type extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="type col">
                <label>Type</label>
                <select className="form-control" onChange={this.handleChange}>
                    <option value="all-meat">All Meat</option>
                    <option value="meat-and-filler">Meat and Filler</option>
                </select>
            </div>
        )
    }
}
export default Type;
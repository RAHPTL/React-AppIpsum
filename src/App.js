import React, { Component } from 'react';
import Output from './components/Output';
import Paras from './components/controls/Paras';
import Type from './components/controls/Type';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      paras: 3,
      type: 'all-meat',
      text: 'Default Text'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  getLipsumData(){
    fetch(`https://baconipsum.com/api/?type=${this.state.type}&paras=${this.state.paras}`)
    .then(data=>{
      return data.json();
    })
    .then(response=>{
      this.setState({ text: response });
    })
  }

  componentWillMount(){
    console.log("App Component Mounted");
    this.getLipsumData();
  }

  handleChange(val){
    this.setState({ paras: val},()=>{
      this.getLipsumData();
    });
  }

  handleTypeChange(val) {
    this.setState({ type: val }, () => {
      this.getLipsumData();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form-row mb-5 mt-5">
            <Paras value={this.state.paras} onChange={this.handleChange} />
            <Type value={this.state.type} onChange={this.handleTypeChange} />
            <span>{this.state.paras}</span>
          </div>
            <Output text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;

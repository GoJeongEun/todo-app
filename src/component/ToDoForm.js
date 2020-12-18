import React, { Component } from 'react';
import '../App.css';

class ToDoForm extends Component {
  state = {
    text: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      text: '',
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit} className="form">
          <input value={text} name="text" placeholder="..입력" onChange={this.handleChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
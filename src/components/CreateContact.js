import React, { Component } from "react";

class CreateContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
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
      name: '',
      phone: '',
      email: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default CreateContact;

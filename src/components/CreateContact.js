import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CONTACT_BASIC } from '../routes/paths';
import './CreateContact.css'
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
  goHome = () => {

  };
  render() {
    return (
      <div className="create-contact">
        <div className="header">
          <h3>새 연락처</h3>
          <Link to={{
            pathname: CONTACT_BASIC,
            state: this.state
          }}>
            <button type="button">
              <i className="fas fa-plus"></i>등록
            </button>
          </Link>
        </div>
        <div className="input-container">
          <h4>이름</h4>
          <input
            name="name"
            placeholder="이름"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h4>전화번호</h4>
          <input
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <h4>이메일</h4>
          <input
            name="email"
            placeholder="이메일"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
      </div>
    );
  }
}

export default CreateContact;

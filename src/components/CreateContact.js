import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { CONTACT_BASIC } from '../routes/paths';
import { 
  setContactName, 
  setContactPhone, 
  setContactEmail, 
  setContactId, 
  addContact, 
  setContactEmpty } from '../actions/actions'
import './CreateContact.css'
class CreateContact extends Component {
  handleChange = (e) => {
    switch(e.target.name) {
      case 'name' :
        this.props.dispatch(setContactName(e.target.value))
        break;
      case 'phone' :
        this.props.dispatch(setContactPhone(e.target.value))
        break;
      case 'email' :
        this.props.dispatch(setContactEmail(e.target.value))
        break;
      default: 
        return ''
    }
  };
  goHome = () => {
    // 기존 id 중 가장 큰 값에 +1
    const { contactList } = this.props.contactReducer;
    let id = Math.max(...contactList.map(item => item.id)) + 1

    this.props.dispatch(setContactId(id))
    this.props.dispatch(addContact())
    this.props.dispatch(setContactEmpty())
  };
  render() {
    const contact = this.props.contactReducer.contact;

    return (
      <div className="create-contact">
        <div className="header">
          <h3>새 연락처</h3>
          <Link to={{
            pathname: CONTACT_BASIC
          }}>
            <button type="button" onClick={this.goHome}>
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
            value={contact.name}
          />
          <h4>전화번호</h4>
          <input
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
            value={contact.phone}
          />
          <h4>이메일</h4>
          <input
            name="email"
            placeholder="이메일"
            onChange={this.handleChange}
            value={contact.email}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => state)(CreateContact);

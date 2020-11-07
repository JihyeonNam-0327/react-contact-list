import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { CREATE_CONTACT } from '../routes/paths';
import { deleteContact, modifyContact } from '../actions/actions'
import ContactList from './ContactList';
import './ContactBasic.css';

class ContactBasic extends Component {
  
  state = {
    keyword: '',
  }

  componentDidMount = () => {}
  
  setKeyword = e => {
    this.setState({
      keyword: e.target.value
    })
  }

  removePhoneInfo = id => {
    this.props.dispatch(deleteContact(id))
  }

  modifyPhoneInfo = (id, contact) => {
    this.props.dispatch(modifyContact(id, contact))
  }

  render() {
    return (
      <div className="contact-basic">
        <div className="header">
          <h3>연락처</h3>
          <Link to={CREATE_CONTACT}>
            <button type="button">
              <i className="fas fa-plus"></i>추가
            </button>
          </Link>
        </div>
        <div className="input-container">
          <i className="fa fa-search icon"></i>
          <input
            className="input-field"
            value={this.state.keyword}
            onChange={this.setKeyword}
            placeholder="검색"
          />
        </div>
        <ContactList
          removeContact={this.removePhoneInfo}
          // 검색어가 포함된 연락처만 표기
          contactList={this.props.contactReducer.contactList.filter(info => info.name.indexOf(this.state.keyword) > -1)} 
          modifyContact={this.modifyPhoneInfo}
        />
      </div>
    );
  }
}

export default connect(state => state)(ContactBasic);
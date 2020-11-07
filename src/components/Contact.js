import React, { Component } from "react";
import { connect } from 'react-redux';
import "./Contact.css";

class Contact extends Component {
  state = {
    editing: false,
    name: "",
    phone: "",
    email: "",
    id: "",
  };

  removeItem = () => {
    const { contact, removeContact } = this.props;
    removeContact(contact.id);
  };

  toggleEditState = () => {
    const { contact, modifyContact } = this.props;
    if (this.state.editing) {
      modifyContact(contact.id, {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        id: this.state.id,
      });
    } else {
      this.setState({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        id: contact.id,
      });
    }
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    return this.props.contact !== nextProps.contact;
  }

  render() {
    const { name, phone, email } = this.props.contact;
    const { editing } = this.state;
    let editButton;
    if (editing) {
      editButton = (
        <div className="edit-button" onClick={this.toggleEditState}>
          <i className="fa fa-edit" />
          <span>완료</span>
        </div>
      );
    } else {
      editButton = (
        <div className="edit-button" onClick={this.toggleEditState}>
          <i className="fa fa-edit" />
          <span>수정</span>
        </div>
      );
    }

    return (
      <div className="contact-container">
        {editing ? (
          <div className="contact-editing">
            <div className="item">
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div className="item">
              <input
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
            <div className="item">
              <input
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
          </div>
        ) : (
          <div className="contact">
            <div className="item">{name}</div>
            <div className="item">{phone}</div>
            <div className="item">{email}</div>
          </div>
        )}
        <div className="button-container">
          <div className="delete-button" onClick={this.removeItem}>
            <i className="fa fa-trash-alt" />
            삭제
          </div>
          {editButton}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Contact);
// export default Contact;

import React, { Component } from "react";
import Contact from "./Contact";
import "./ContactList.css"

class ContactList extends Component {
  render() {
    const { contactList, removeContact, modifyContact } = this.props;
    const list = contactList.map(contact => (
      <Contact
        removeContact={removeContact}
        modifyContact={modifyContact}
        contact={contact}
        key={contact.id}
      />
    ));
    return <div className="contact-list">{list}</div>;
  }
}

export default ContactList;

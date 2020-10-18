import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CREATE_CONTACT } from '../routes/paths';
import ContactList from './ContactList';
import './ContactBasic.css';

class ContactBasic extends Component {

  state = {
    contactList: [
      {
        id: 0,
        name: 'JYP 나연',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 1,
        name: 'JYP 사나',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 2,
        name: 'JYP 쯔위',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 3,
        name: 'JYP 다현',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 4,
        name: 'JYP 채영',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 5,
        name: 'JYP 정연',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 6,
        name: 'JYP 미나',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 7,
        name: 'JYP 지효',
        phone: '010-1234-5678',
        email: 'twice@naver.com'
      },
      {
        id: 8,
        name: 'JYP 류진',
        phone: '010-1234-5678',
        email: 'itzy@naver.com'
      },
      {
        id: 9,
        name: 'JYP 리아',
        phone: '010-1234-5678',
        email: 'itzy@naver.com'
      },
      {
        id: 10,
        name: 'JYP 채령',
        phone: '010-1234-5678',
        email: 'itzy@naver.com'
      },
      {
        id: 11,
        name: 'JYP 예지',
        phone: '010-1234-5678',
        email: 'itzy@naver.com'
      },
      {
        id: 12,
        name: 'JYP 유나',
        phone: '010-1234-5678',
        email: 'itzy@naver.com'
      },
    ],
    keyword: '',
  }

  componentDidMount = () => {
    if(this.props.location.state) {
      const params = this.props.location.state
      this.addPhoneInfo(params)
      this.props.location.state = null
    }
  }

  addPhoneInfo = item => {
    const { contactList } = this.state;
    item.id = Math.max(...contactList.map(item => item.id)) + 1
    this.setState({
      contactList: contactList.concat(Object.assign({}, item))
    })
  }
  
  setKeyword = e => {
    this.setState({
      keyword: e.target.value
    })
  }

  removePhoneInfo = id => {
    const { contactList } = this.state;
    this.setState({
      contactList: contactList.filter(info => info.id !== id)
    });
  }

  modifyPhoneInfo = (id, item) => {
    const { contactList } = this.state;
    this.setState({
      contactList: contactList.map( contact => {
        if(contact.id === id) {
          return {
            ...item,
          };
        }
        return contact;
      })
    });
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
          contactList={this.state.contactList.filter(info => info.name.indexOf(this.state.keyword) > -1)} 
          modifyContact={this.modifyPhoneInfo}
        />
      </div>
    );
  }
}

export default ContactBasic;
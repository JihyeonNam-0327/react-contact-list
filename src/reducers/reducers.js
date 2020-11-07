const { 
  SET_CONTACT_EMPTY,
  SET_CONTACT_ID,
  SET_CONTACT_NAME,
  SET_CONTACT_EMAIL,
  SET_CONTACT_PHONE,
  ADD_CONTACT, 
  DELETE_CONTACT,
  MODIFY_CONTACT } = require("../actions/actions")

const initialState = {
  contact: {
    id: '',
    name: '',
    phone: '',
    email: ''
  },
  contactList: [
    {
      id: 0,
      name: 'JYP 트와이스 나연',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 1,
      name: 'JYP 트와이스 사나',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 2,
      name: 'JYP 트와이스 쯔위',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 3,
      name: 'JYP 트와이스 다현',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 4,
      name: 'JYP 트와이스 채영',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 5,
      name: 'JYP 트와이스 정연',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 6,
      name: 'JYP 트와이스 미나',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 7,
      name: 'JYP 트와이스 지효',
      phone: '010-1234-5678',
      email: 'twice@naver.com'
    },
    {
      id: 8,
      name: 'JYP 있지 류진',
      phone: '010-1234-5678',
      email: 'itzy@naver.com'
    },
    {
      id: 9,
      name: 'JYP 있지 리아',
      phone: '010-1234-5678',
      email: 'itzy@naver.com'
    },
    {
      id: 10,
      name: 'JYP 있지 채령',
      phone: '010-1234-5678',
      email: 'itzy@naver.com'
    },
    {
      id: 11,
      name: 'JYP 있지 예지',
      phone: '010-1234-5678',
      email: 'itzy@naver.com'
    },
    {
      id: 12,
      name: 'JYP 있지 유나',
      phone: '010-1234-5678',
      email: 'itzy@naver.com'
    },
  ]
}

function contactApp(state = initialState, action) {
  switch(action.type) {
    case SET_CONTACT_EMPTY:
      return {
        ...state,
        contact: {
          id: '',
          name: '',
          phone: '',
          email: ''
        }
      }
    case SET_CONTACT_ID: 
      return {
        ...state,
        contact: {
          ...state.contact,
          id: action.payload.id
        }
      }
    case SET_CONTACT_NAME:
      return {
        ...state,
        contact: {
          ...state.contact,
          name: action.payload.name
        }
      }
    case SET_CONTACT_EMAIL:
      return {
        ...state,
        contact: {
          ...state.contact,
          email: action.payload.email
        }
      }
    case SET_CONTACT_PHONE:
      return {
        ...state,
        contact: {
          ...state.contact,
          phone: action.payload.phone
        }
      }
    case ADD_CONTACT:
      return {
        ...state,
        contactList: state.contactList.concat(state.contact)
      }
    case DELETE_CONTACT:
      let returnArray = state.contactList.filter(contact => contact.id !== action.payload.id)
      
      return {
        ...state,
        contactList: [...returnArray]
      }
    case MODIFY_CONTACT:
      let modifiedArray = state.contactList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.contact
        } else {
          return item
        }
      })
      
      return {
        ...state,
        contactList: [...modifiedArray]
      }
    default:
      return state
  }
}

export default contactApp;

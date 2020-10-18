const { 
  ADD_CONTACT, 
  DELETE_CONTACT,
  MODIFY_CONTACT } = require("./actions")

const initialState = {
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
  ]
}

function contactApp(state = initialState, action) {
  // 지금은 아무 액션도 다루지 않고
  // 주어진 상태를 그대로 반환합니다.
  switch(action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        contactList: [...state.contactList, {
          contact: action.contact
        }]
      })
    case DELETE_CONTACT:
      let returnArray = state.map(contact => contact.id !== action.id)
      return Object.assign({}, state, {
        contactList: [...returnArray]
      })
    case MODIFY_CONTACT:
      return state.map((item) => {
        if (item.id !== action.in) {
          return item
        }
    
        return {
          ...action.contact
        }
      })
    default:
      return state
  }
}

export default contactApp;

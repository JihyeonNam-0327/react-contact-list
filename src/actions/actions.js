/*
 * 액션 타입
 */
export const SET_CONTACT_EMPTY = 'SET_CONTACT_EMPTY'
export const SET_CONTACT_ID = 'SET_CONTACT_ID'
export const SET_CONTACT_NAME = 'SET_CONTACT_NAME'
export const SET_CONTACT_EMAIL = 'SET_CONTACT_EMAIL'
export const SET_CONTACT_PHONE = 'SET_CONTACT_PHONE'

export const ADD_CONTACT = 'ADD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const MODIFY_CONTACT = 'MODIFY_CONTACT'

/*
 * 액션 크리에이터 with dispatch
 */
export const setContactEmpty = (id) => {
  return dispatch => { 
    dispatch({
      type: SET_CONTACT_EMPTY
    })
  }
}

export const setContactId = (id) => {
  return dispatch => { 
    dispatch({
      type: SET_CONTACT_ID, 
      payload: { 
        id: id 
      }
    })
  }
}

export const setContactName = (name) => {
  return dispatch => {
    dispatch({
      type: SET_CONTACT_NAME,
      payload: {
        name: name
      }
    })
  }
}

export const setContactEmail = (email) => {
  return dispatch => {
    dispatch({
      type: SET_CONTACT_EMAIL,
      payload: {
        email: email
      }
    })
  }
}

export const setContactPhone = (phone) => {
  return dispatch => {
    dispatch({
      type: SET_CONTACT_PHONE,
      payload: {
        phone: phone
      }
    })
  }
}

export const addContact = () => {
  return dispatch => {
    dispatch({
      type: ADD_CONTACT
    })
  }
}

export const deleteContact = (id) => {
  return dispatch => {
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        id: id
      }
    })
  }
}

export const modifyContact = (id, contact) => {
  return dispatch => {
    dispatch({
      type: MODIFY_CONTACT,
      payload: {
        id: id,
        contact: contact
      }
    })
  }
}

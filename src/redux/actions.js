/*
 * 액션 타입
 */

export const ADD_CONTACT = 'ADD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const MODIFY_CONTACT = 'MODIFY_CONTACT'

/*
 * 액션 생산자
 */

export function addContact(contact) {
  return { type: ADD_CONTACT, contact }
}

export function deleteContact(id) {
  return { type: DELETE_CONTACT, id }
}

export function modifyContact(contact) {
  return { type: MODIFY_CONTACT, contact }
}
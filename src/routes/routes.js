import components from '../components'
import { CONTACT_BASIC, CREATE_CONTACT } from './paths'

const CreateContact = {
  component: components.CreateContact,
  path: CREATE_CONTACT
}
const ContactBasic = {
  component: components.ContactBasic,
  path: CONTACT_BASIC
}

export default [CreateContact, ContactBasic]

import components from '../components'
import app from '../App'

const CreateContact = {
  component: components.CreateContact,
  path: '/createContact'
}
const App = {
  component: app,
  path: '/'
}

export default [CreateContact, App]

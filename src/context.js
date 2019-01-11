import {createStore} from 'pureact'
import reducer from './reducers/todos'

const store = createStore(reducer, {
  todos: []
})

export default store
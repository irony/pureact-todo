import {createStore} from 'pureact'

const initialState = {
  todos: [],
  newTitle: ''
}

const todos = (state, action) => {
  switch(action.type) {
    case 'CHANGE_NEW_TITLE': return {...state, newTitle: action.title}
    case 'CHANGE_CHECKED': return {...state, todos: [...state.todos.map(todo => todo.id === action.id ? {...todo, checked: action.checked} : todo) ]}
    case 'ADD_TODO': return {...state, newTitle: '', focus: true, todos: [...state.todos, { title: action.title, id: Math.random() }]}
    case 'REMOVE_TODO': return {...state, todos: [...state.todos.filter(todo => todo.id !== action.id) ]}
    case 'CHECK_ALL': return {...state, todos: state.todos.map(todo => ({...todo, checked: true}))}
    case 'UNCHECK_ALL': return {...state, todos: state.todos.map(todo => ({...todo, checked: false}))}
    default: return state
  }
}
const store = createStore(todos, initialState)

export default store
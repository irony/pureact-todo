import {createStore} from 'pureact'

const initialState = {
  todos: []
}

const todos = (state, action) => {
  switch(action.type) {
    case 'CHANGE_CHECKED': return {...state, todos: [...state.todos.map(todo => todo.id === action.id ? {...todo, checked: action.checked} : todo) ]}
    case 'ADD_TODO': return {...state, focus: true, todos: [...state.todos, { title: action.title, id: Math.random() }]}
    case 'REMOVE_TODO': return {...state, todos: [...state.todos.filter(todo => todo.id !== action.id) ]}
    case 'CHECK_ALL': return {...state, todos: state.todos.map(todo => ({...todo, checked: true}))}
    case 'UNCHECK_ALL': return {...state, todos: state.todos.map(todo => ({...todo, checked: false}))}
    case 'SET_FILTER': return {...state, filter: action.filter }
    default: return state
  }
}
const store = createStore(todos, initialState)

export default store
import React, { Component } from 'pureact'
import store from '../store'

class Todo extends Component{
  render (){
    const {todo} = this.props
    return (
      <li className={todo.checked ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.checked} id={todo.id} onclick={e => this.check(todo.id, e.target.checked)}/>
          <label htmlFor={todo.id}>{todo.title}</label>
          <button className="destroy" onclick={e => this.remove(todo.id)}></button>
        </div>
        <input className="edit" value={todo.title}/>
      </li>)
  }
  check(id, checked){
    store.dispatch({type:'CHANGE_CHECKED', id, checked})
  }
  remove(id){
    store.dispatch({type:'REMOVE_TODO', id})
  }
}

export default Todo
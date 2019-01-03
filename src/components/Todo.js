import React, { useState } from 'pureact'
import store from '../store'

function Todo ({todo}) {
    const check = (id, checked) => {
      store.dispatch({type:'CHANGE_CHECKED', id, checked})
    }
    const remove = (id) => {
      store.dispatch({type:'REMOVE_TODO', id})
    }

    return (
      <li className={todo.checked ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.checked} id={todo.id} onclick={e => check(todo.id, e.target.checked)}/>
          <label htmlFor={todo.id}>{todo.title}</label>
          <button className="destroy" onclick={e => remove(todo.id)}></button>
        </div>
        <input className="edit" value={todo.title}/>
      </li>)

}

export default Todo
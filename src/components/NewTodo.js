import React, { Component } from 'pureact'
import store from '../store'

const submit = (e) => {
  if (e.keyCode === 13) {
    add(e.target.value)
  } else {
    changeTitle(e.target.value)
  }
}
const add = (title) => {
  store.dispatch({type:'ADD_TODO', title})
}
const changeTitle = (title) => {
  store.dispatch({type:'CHANGE_NEW_TITLE', title})
}

function NewTodo ({title}) {
  return <input className="new-todo" placeholder="What needs to be done?" value={title} onkeyup={submit} autofocus/>
}

export default NewTodo

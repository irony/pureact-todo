import React, { useState } from 'pureact'
import store from '../store'

function NewTodo () {
  const [title, setTitle] = useState('')
  const submit = ({keyCode, target: {value}}) => {
    if (keyCode === 13 && value.length > 0) {
      setTitle('')
      add(value)
    }
  }

  const add = (title) => store.dispatch({type:'ADD_TODO', title})

  return (
    <span>
      <input className="new-todo" placeholder="What needs to be done?" value={title} onkeyup={submit} onkeydown={e => setTitle(e.target.value)} autofocus/>
    </span>
  )
}

export default NewTodo

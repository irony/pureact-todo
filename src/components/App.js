import React, { Component } from 'pureact'
import store from '../store' 
import Todo from './Todo'
import NewTodo from './NewTodo'
import Filters from './Filters'
import 'todomvc-app-css/index.css';

  const select = (todos, filter) => todos.filter(todo => filter === 'all' || filter === 'completed' && todo.checked || filter === 'active' && !todo.checked)
  const clearCompleted = (todos) => todos
  .filter(todo => todo.checked)
  .map(todo => todo.id)
  .map(id => store.dispatch({type:'REMOVE_TODO', id}))

const checkAll = () => store.dispatch({type:'CHECK_ALL'})
const uncheckAll = () => store.dispatch({type:'UNCHECK_ALL'})

function App ({newTitle, todos, filter = 'all'}) {
  const count = filter => select(todos, filter).length
  const filtered = select(todos, filter)
  return (
    <section className="todoapp">
      <header className="header">
        <h1>Pureact Todo</h1>
        <NewTodo title={newTitle} />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" checked={count('completed')} change={e => e.target.checked ? checkAll() : uncheckAll()}/>
        <label htmlFor="toggle-all">Mark all as {count('active') ? 'complete':'uncomplete'}</label>
        <ul className="todo-list">
          {filtered.map(todo => <Todo todo={todo} />)}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count"><strong>{count('active') || '0'}</strong> item left</span>
        <Filters filters={['all', 'active', 'completed']} active={filter} />
        {count('completed') && <button onclick={e => clearCompleted(todos)} className="clear-completed">Clear completed</button>}
      </footer>
    </section>
  )

}

export default App

import React, { useState } from 'pureact'
import Store from '../store' 
import Todo from './Todo'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import NewTodo from './NewTodo'
import Filters from './Filters'
import 'todomvc-app-css/index.css';
const {dispatch} = Store

const select = (todos, filter) => todos.filter(todo => filter === 'all' || filter === 'completed' && todo.checked || filter === 'active' && !todo.checked)
const checkAll = () => dispatch({type:'CHECK_ALL'})
const uncheckAll = () => dispatch({type:'UNCHECK_ALL'})
const remove = ({id}) => dispatch({type: 'REMOVE_TODO', id})
const removeCompleted = (todos) => select(todos, 'completed').map(remove)


function App ({todos}) {
  const [filter, setFilter] = useState('all')
  const filtered = select(todos, filter)
  const count = filter => select(todos, filter).length
  return (
    <section className="todoapp">
      <Header title="Pureact Todo" >
        <NewTodo />
      </Header>
      <Main>
        <input className="toggle-all" type="checkbox" checked={count('completed')} change={e => e.target.checked ? checkAll() : uncheckAll()}/>
        <label htmlFor="toggle-all">Mark all as {count('active') ? 'complete':'uncomplete'}</label>
        <ul className="todo-list">
          {filtered.map(todo => <Todo todo={todo} />)}
        </ul>
      </Main>
      <Footer activeCount={count('active') || '0'}>
        <Filters setFilter={setFilter} filters={['all', 'active', 'completed']} active={filter} />
        {count('completed') && <button onclick={e => removeCompleted(todos)} className="clear-completed">Clear completed</button>}
      </Footer>
    </section>
  )

}

export default App

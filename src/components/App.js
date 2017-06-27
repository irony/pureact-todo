import React, { Component } from 'pureact'
import store from '../store' 
import Todo from './Todo'
import NewTodo from './NewTodo'
import Filters from './Filters'
import 'todomvc-app-css/index.css';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Pureact Todo</h1>
          <NewTodo title={this.props.newTitle} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" checked={this.count('completed')} change={e => e.target.checked ? this.checkAll() : this.uncheckAll()}/>
          <label htmlFor="toggle-all">Mark all as {this.count('active') ? 'complete':'uncomplete'}</label>
          <ul className="todo-list">
            {this.todos(this.props.filter).map(todo => <Todo todo={todo} />)}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>{this.count('active') || '0'}</strong> item left</span>
          <Filters filters={['all', 'active', 'completed']} active={this.props.filter} />
          {this.count('completed') && <button onclick={e => this.clearCompleted()} className="clear-completed">Clear completed</button>}
        </footer>
      </section>
    )
  }

  count(filter) {
    return this.todos(filter).length
  }
  todos(filter = 'all'){
    return this.props.todos.filter(todo => filter === 'all' || filter === 'completed' && todo.checked || filter === 'active' && !todo.checked)
  }
  clearCompleted(){
    this.props.todos
      .filter(todo => todo.checked)
      .map(todo => todo.id)
      .map(id => store.dispatch({type:'REMOVE_TODO', id}))
  }
  checkAll(){
    store.dispatch({type:'CHECK_ALL'})
  }
  uncheckAll(){
    store.dispatch({type:'UNCHECK_ALL'})
  }
}

export default App

import React, { Component } from 'pureact'
import store from './store'
import 'todomvc-app-css/index.css';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Pureact Todo</h1>
          <input className="new-todo" placeholder="What needs to be done?" value={this.props.newTitle} onkeyup={this.submit.bind(this)} autofocus/>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" checked={this.todos('completed').length} onclick={e=> e.target.checked ? this.checkAll() : this.uncheckAll()}/>
          <label for="toggle-all">Mark all as {this.todos('active').length ? 'complete':'uncomplete'}</label>
          <ul className="todo-list">
            {this.todos(this.props.filter).map(todo => (
              <li className={todo.checked ? 'completed' : ''}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.checked} id={todo.id} onclick={e => this.check(todo.id, e.target.checked)}/>
                  <label htmlFor={todo.id}>{todo.title}</label>
                  <button className="destroy" onclick={e => this.remove(todo.id)}></button>
                </div>
                <input className="edit" value={todo.title}/>
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>{this.todos('active').length || '0'}</strong> item left</span>
          <ul className="filters">
            <li>
              <a href="#" className={this.props.filter === 'all' ? 'selected' : ''} onclick={e => this.setFilter('all')}>All</a>
            </li>
            <li>
              <a href="#" className={this.props.filter === 'active' ? 'selected' : ''} onclick={e => this.setFilter('active')}>Active</a>
            </li>
            <li>
              <a href="#" className={this.props.filter === 'completed' ? 'selected' : ''} onclick={e => this.setFilter('completed')}>Completed</a>
            </li>
          </ul>
          {this.todos('active').length && <button onclick={e => this.clearCompleted()} className="clear-completed">Clear completed</button>}
        </footer>
      </section>
    )
  }

  /* View methods */
  submit(e){
    if (e.keyCode === 13) {
      this.add(e.target.value)
    } else {
      this.changeTitle(e.target.value)
    }
  }
  todos(filter = 'all'){
    return this.props.todos.filter(todo => filter === 'all' || filter === 'completed' && todo.checked || filter === 'active' && !todo.checked)
  }
  clearCompleted(){
    this.props.todos
      .filter(todo => todo.checked)
      .map(todo => todo.id)
      .map(this.remove)
  }
  setFilter(filter){
    store.dispatch({type:'SET_FILTER', filter})
  }

  /* Storage methods */
  add(title){
    store.dispatch({type:'ADD_TODO', title})
  }
  changeTitle(title){
    store.dispatch({type:'CHANGE_NEW_TITLE', title})
  }
  check(id, checked){
    store.dispatch({type:'CHANGE_CHECKED', id, checked})
  }
  remove(id){
    store.dispatch({type:'REMOVE_TODO', id})
  }
  checkAll(){
    store.dispatch({type:'CHECK_ALL'})
  }
  uncheckAll(){
    store.dispatch({type:'UNCHECK_ALL'})
  }
}

export default App

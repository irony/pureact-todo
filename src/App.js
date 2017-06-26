import React, { Component } from 'pureact'
import logo from './logo.svg'
import store from './store'
import './App.css'

class App extends Component {
  add(title){
    store.dispatch({type:'ADD_TODO', title})
  }
  change(title){
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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pureact Todo</h2>
        </div>
        <ul>
          <li>
           {this.props.todos.filter(todo=>todo.checked).length ? <button onclick={this.uncheckAll}>Uncheck all</button> : null}
           {this.props.todos.filter(todo=>!todo.checked).length ? <button onclick={this.checkAll}>Check all</button> : null}
          </li>          
          {this.props.todos.map(todo => (
            <li>
              <input type="checkbox" checked={todo.checked} id={todo.id} onclick={e => this.check(todo.id, e.target.checked)}>X</input>
              <span className={todo.checked ? 'Checked' : ''}><label htmlFor={todo.id}>{todo.title}</label></span>
              <button onclick={e => this.remove(todo.id)}>X</button>
            </li>
          ))}
          <li>
            <input placeholder="Add Todo" value={this.props.newTitle} onkeyup={e => this.change(e.target.value)}/>
            <button onclick={e => this.add(this.props.newTitle)}>Add</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default App

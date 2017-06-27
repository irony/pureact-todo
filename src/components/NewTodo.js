import React, { Component } from 'pureact'
import store from '../store'

class NewTodo extends Component {
  render() {
    return <input className="new-todo" placeholder="What needs to be done?" value={this.props.title} onkeyup={this.submit.bind(this)} autofocus/>
  }
  submit(e){
    if (e.keyCode === 13) {
      this.add(e.target.value)
    } else {
      this.changeTitle(e.target.value)
    }
  }
  add(title){
    store.dispatch({type:'ADD_TODO', title})
  }
  changeTitle(title){
    store.dispatch({type:'CHANGE_NEW_TITLE', title})
  }
}

export default NewTodo

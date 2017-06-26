import React, {render} from 'pureact';
import App from './App';
import './index.css';
import store from './store'

let oldTree
store.subscribe(() => {
  const state = store.getState()
  oldTree = render(<App {...state} />, document.getElementById('root'), oldTree);
})

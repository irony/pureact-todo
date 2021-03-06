import React, {render} from 'pureact'
import App from './components/App'
import store from './store'

let oldTree
store.subscribe(() => {
  const state = store.getState()
  oldTree = render(<App {...state} />, document.getElementById('root'), oldTree)
})

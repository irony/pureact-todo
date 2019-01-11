import React, {render} from 'pureact'
import App from './components/App'
import context from './context'

let oldTree
context.subscribe(() => {
  const state = context.getState()
  oldTree = render(<App {...state} />, document.getElementById('root'), oldTree)
})

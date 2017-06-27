import React, { Component } from 'pureact'
import store from '../store' 

const Filter = ({filter, active, setFilter}) => (
  <li>
    <a href="#" className={filter === active ? 'selected' : ''} onclick={e => setFilter(filter)}>{filter}</a>
  </li>
)

class Filters extends Component {
  render(){
    return (<ul className="filters">
      {this.props.filters.map(filter => <Filter filter={filter} active={this.props.active} setFilter={this.setFilter} />)}
    </ul>)
  }
  setFilter(filter){
    store.dispatch({type:'SET_FILTER', filter})
  }

}

export default Filters
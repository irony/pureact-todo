import React, { Component } from 'pureact'
import store from '../store' 

const Filter = ({filter, active, setFilter}) => (
  <li>
    <a href="#" className={filter === active ? 'selected' : ''} onclick={e => setFilter(filter)}>{filter}</a>
  </li>
)

const setFilter = (filter) => store.dispatch({type:'SET_FILTER', filter})

function Filters ({active, filters}) {
  return (
    <ul className="filters">
      {filters.map(filter => <Filter filter={filter} active={active} setFilter={setFilter} />)}
    </ul>
  )
}

export default Filters
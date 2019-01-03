import React, { Component } from 'pureact'
import store from '../store' 

function Filters ({active, filters, setFilter}) {
  return (
    <ul className="filters">
      {
        filters.map(filter => (
          <li>
            <a href="#" className={filter === active ? 'selected' : ''} onclick={e => setFilter(filter)}>{filter}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Filters
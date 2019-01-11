import React from 'pureact'

function Filters ({active, filters, setFilter}) {
  return (
    <ul className="filters">
      {
        filters.map(filter => <li><a href="#" className={filter === active ? 'selected' : ''} onClick={e => setFilter(filter)}>{filter}</a></li>)
      }
    </ul>
  )
}

export default Filters
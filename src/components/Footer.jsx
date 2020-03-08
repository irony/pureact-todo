import React from 'pureact'

const Footer = ({children, activeCount}) => (
  <footer className="footer">
    <span className="todo-count"><strong>{activeCount}</strong> {activeCount === 1 ? 'item' : 'items'} left</span>
    {children}  
  </footer>
)

export default Footer

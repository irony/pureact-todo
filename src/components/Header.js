import React from 'pureact'

const Header = ({title, children}) => (
  <header className="header">
    <h1>{title}</h1>
    {children}
  </header>
)

export default Header

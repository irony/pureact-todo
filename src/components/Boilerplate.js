import React from 'pureact'

export const Main = ({children}) => (
  <section className="main">
    {children}
  </section>
)

export const Header = ({title, children}) => (
  <header className="header">
    <h1>{title}</h1>
    {children}
  </header>
)

export const Footer = ({children, countActive}) => (
  <footer className="footer">
    <span className="todo-count"><strong>{countActive}</strong> {countActive === 1 ? 'item' : 'items'} left</span>
    {children}  
  </footer>
)
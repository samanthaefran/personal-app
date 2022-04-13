import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return(
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
       </ul>
      </nav>
      <main>
        <h3>{pageTitle}</h3>
        {children}
      </main>
    </div>
  )
}

export default Layout
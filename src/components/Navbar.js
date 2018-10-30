import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav>
    <Link to="/about">
      About
    </Link>
    <Link to="/">
      How It Works
    </Link>
  </nav>
)

export default Navbar

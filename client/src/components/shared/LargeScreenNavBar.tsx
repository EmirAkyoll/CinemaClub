import React from 'react'
import { Link } from 'react-router-dom'

const LargeScreenNavBar = () => {
  return (
    <div style={{width: '250px', display: 'flex', justifyContent: 'space-between'}}>
      <Link to={"/"} style={{color: 'white', textDecoration: 'none'}}>Movies</Link>
      <Link to={"/bookmarks"} style={{color: 'white', textDecoration: 'none'}}>Bookmarks</Link>
      <Link to={"/offers"} style={{color: 'white', textDecoration: 'none'}}>Offers</Link>
    </div>
  )
}

export default LargeScreenNavBar

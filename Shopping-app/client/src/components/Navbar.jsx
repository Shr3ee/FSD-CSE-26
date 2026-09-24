import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <li><a href='/'>HOME</a></li>
      <li><a href='/products'>Products</a></li>
      <li><a href="/cart">Cart</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/profile">Profile</a></li>  
    </div>
  )
}

export default Navbar

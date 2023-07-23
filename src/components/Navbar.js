import React from 'react'

const Navbar = () => {
  return (
   <div className='navbar-wrapper'>
    <nav className="navbar-container">
        <div className="logo-container">
            <a href="index.html">Homepage</a>
        </div>

        <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        <ul className="nav-items">
         
           
            <div className="login-register">
                <a href="#" >Login</a>
                <a href="#" className="button">Create account</a>
            </div>
        </ul>
    </nav>
   </div>
  )
}

export default Navbar
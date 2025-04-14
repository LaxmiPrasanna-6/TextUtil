import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      
    </ul>
    
    <div className={`form-check form-switch text-${props.mode==="light" ? "dark":"light"} mx-5 ms-auto`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" for="flexSwitchCheckDefault" >Enable {props.mode==="light"?"dark":"light"} mode</label>
    </div>
    
  </div>
  
</nav>
    </div>
  )
}
Navbar.propTypes={title: PropTypes.string}
export default Navbar

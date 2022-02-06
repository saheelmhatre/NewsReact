import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    return ( 
    <div>
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">NewsMe</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/business">Business</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/health">Health</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/science">Science</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/sports">Sports</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/technology">Technology</NavLink>
      </div>
    </div>
    <div className={`form-check form-switch mx-3 text-light`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='dark'?'lighy':'dark'}`}htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
  </div>
</nav>
</div>
   )
}

export default Navbar

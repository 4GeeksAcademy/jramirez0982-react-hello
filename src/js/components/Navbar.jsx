import React from 'react'

const Navbar = () => {
  return (
    <div className='container-fluid bg-dark'>
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav align-items-start">
              <a className="nav-link active " aria-current="page" href="#">Home</a>
              <a className="nav-link " href="#">About</a>
              <a className="nav-link " href="#">Services</a>
              <a className="nav-link " href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

    </div>)
}

export default Navbar


import React from 'react'

function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
            <i className="navbar-brand bi bi-justify-left" onClick={Toggle}></i>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="user" width={30}/> 
                    </a>
                <ul className="dropdown-menu w-50" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
                </li>

            </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
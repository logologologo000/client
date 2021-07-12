import React from 'react'
import '../css/Navbar.css'

function navbar() {
    return (
        <div className="container-fluid"> 
            
            <nav className="navbar navbar-expand-md navbar-light 
             bg-light mt-3 ">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand navcenter">LOGO</a>

                    <button type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarDropdown">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarDropdown">

                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page" >home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" aria-current="page" >dashboard</a>
                            </li>
                            <li className="nav-item dropdown">

                                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenu" data-bs-toggle="dropdown" aria-current="page" >signin</a>

                                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenu">
                                    <li>
                                        <a href="#"
                                            className="dropdown-item nav-link  px-2 "
                                            id="list">
                                            menu 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="dropdown-item nav-link px-2"
                                            id="list"
                                        >menu 2</a>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default navbar

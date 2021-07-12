import React from 'react'

function navbar() {
    return (
        <div >
            <div class="clearfix"></div>
            <nav class="navbar navbar-expand-md navbar-light 
            fixed-top bg-light ">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand">LOGO</a>

                    <button type="button"
                        class="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarDropdown">

                        <span class="navbar-toggler-icon"></span>

                    </button>

                    <div class="collapse navbar-collapse" id="navbarDropdown">

                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a href="#" class="nav-link active" aria-current="page" >home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link" aria-current="page" >dashboard</a>
                            </li>
                            <li class="nav-item dropdown">

                                <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenu" data-bs-toggle="dropdown" aria-current="page" >signin</a>

                                <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenu">
                                    <li>
                                        <a href="#"
                                            class="dropdown-item nav-link  px-2 "
                                            id="list">
                                            menu 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="dropdown-item nav-link px-2"
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

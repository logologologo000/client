import React from 'react'
import '../css/Navbar.css'

function navbar() {
    return (
        <div className="container-fluid ">

            <nav className="navbar navbar-expand-lg mt-3  ">
                <div className="container-fluid ">
                
                    <a href="#"
                        className="fixed-navleft"
                    >
                        Pannawit Ch.
                    </a>

                    <a href="#" className="navcenter">
                        ADMIN
                    </a>

                    <a href="#"
                        className="fixed-navright"
                    >
                        Management
                    </a>

                    <a href="#"
                        className="fixed-navright"
                    >
                        Sign Out
                    </a>
                    
                    





                </div>
            </nav>
            


        </div>
    )
}

export default navbar

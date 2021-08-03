import React from 'react'
import '../css/Navbar.css'

function navbar() {
    return (
        <div className="container-fluid ">

            <nav className="navbar navbar-expand-lg mt-3  ">
            <div class="container-fluid">
            
            <a href="#" className="navmain fixed-navleft dpib">
                        ADMIN
                    </a>

                <button 
                    class="navbar-toggler dpib togglor-custom" 
                    type="button"
                    data-bs-toggle="collapse"  
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false"    
                    aria-label="Toggle navigation">
                        -
                    
                    </button>    
            </div>
            
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            
                        

                   
                        <a href="#"
                        className="fixed-navleft dpib mx-4"
                    >
                         Pannawit.Ch
                    </a>
                    <a href="#"
                        className="fixed-navright mx-4"
                    >
                        Management
                    </a>

                    <a href="#"
                        className="fixed-navright mx-4"
                    >
                        SignOut
                    </a>
                         </div>
                    </div>
                
            </nav>
            
           


        </div>
    )
}

export default navbar

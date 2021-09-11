import React from 'react'
import '../css/Navbar.css'
import {Link, Route, Switch} from 'react-router-dom'
import User from '../user/Users.js'
import Notice from '../user/Notice.js'
import Signin from '../Signin.js'
import CreateRequest from '../user/CreateReq'
import EditRequest from '../user/EditReq'
import Management from '../user/MFix'

const refreshPage = ()=>{
    window.location.reload();
 }

function navbar() {
    return (
        <div className="container-fluid ">

            <nav className="navbar navbar-expand-lg mt-3  ">
            <div className="container-fluid">
            
            <Link to="/" className="navmain fixed-navleft dpib">
                        User
                    </Link>

                <button 
                    className="navbar-toggler dpib togglor-custom my-2 mx-2" 
                    type="button"
                    data-bs-toggle="collapse"  
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false"    
                    aria-label="Toggle navigation">
                        -
                    
                    </button>    
            </div>
            
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                        

                   
                        <a  disabled
                        className=" dpib mx-4 my-2 disable"
                    >
                         Pannawit.Ch
                    </a>
                    <Link to="/notice"
                        className="fixed-navright mx-4 my-2"
                    >
                        Notice
                    </Link>

                    <Link to="/management"
                        className="fixed-navright mx-4 my-2"
                    >
                        Management
                    </Link>

                    <a onClick={refreshPage}
                        className="fixed-navright mx-4 my-2"
                    >
                        SignOut
                    </a>
                         </div>
                    </div>
                
            </nav>
        
        <Switch>
            <Route exact path="/"><User /></Route>
            <Route path="/notice"><Notice /></Route>
            <Route path="/signin"><Signin /></Route>
            <Route path="/createreq"><CreateRequest /></Route>
            <Route path="/fixreq"><EditRequest /></Route>
            <Route path="/management"><Management/></Route>
            
            <Route path="/:id">
                <h1>Undefined route</h1>
            </Route>
        </Switch>
          


        </div>
    )
}

export default navbar

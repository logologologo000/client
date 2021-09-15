import React from 'react'
import '../css/Navbar.css'
import {Link, Route, Switch} from 'react-router-dom'
import Admin from '../admin/Admin.js'
import Management from '../admin/Management.js'
import Signin from '../Signin.js'
import MFixAdmin from '../admin/MFix.js'
import CreateNo from '../admin/CreateNo.js'
import FixReq from '../admin/FixReq.js'
import EditNo from '../admin/EditNo.js'
import { useHistory, useParams } from "react-router-dom";



function Navbar() {
    let history = useHistory();
    
    const refreshPage = ()=>{

        if (window.confirm("Do you want to SignOut ??") == true) {
            history.push("/");
            window.location.reload();
        }
    }
    return (
        <div className="container-fluid ">

            <nav className="navbar navbar-expand-lg mt-3  ">
            <div className="container-fluid">
            
            <Link to="/" className="navmain fixed-navleft dpib">
                        ADMIN
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
                    <Link to="/management"
                        className="fixed-navright mx-4 my-2"
                    >
                        Management
                    </Link>

                    <a type="button" onClick={refreshPage}
                        className="fixed-navright mx-4 my-2"
                    >
                        SignOut
                    </a>
                         </div>
                    </div>
                
            </nav>
        
        <Switch>
            <Route exact path="/"><Admin /></Route>
            <Route path="/management"><Management /></Route>
            <Route path="/signin"><Signin /></Route>
            <Route path="/fixmanagement"><MFixAdmin/></Route>
            <Route path="/createnotice"><CreateNo/></Route>
            <Route path="/editnotice"><EditNo/></Route>
            <Route path="/fixreq"><FixReq/></Route>
            <Route path="/:id">
                <h1>Undefined route</h1>
            </Route>
        </Switch>
          


        </div>
    )
}

export default Navbar

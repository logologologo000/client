import React from 'react'
import '../css/Navbar.css'
import {Link, Route, Switch} from 'react-router-dom'
import User from '../user/Users.js'
import Notice from '../user/Notice.js'
import Signin from '../Signin.js'
import CreateRequest from '../user/CreateReq'
import EditRequest from '../user/EditReq'
import Management from '../user/MFix'
import { dbContext } from '../Signin'
import { useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { MdManageAccounts } from 'react-icons/md';
import { GoSignOut } from 'react-icons/go';
import { TiDocumentText } from 'react-icons/ti';





function Navbar() {
    let history = useHistory();
    const db = useContext(dbContext)
    console.log('123')

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
                         {
                             db[0].firstname 
                         }
                        .
                         {
                             db[0].lastname.substring(2, 0)
                         }
                    </a>
                    <Link to="/notice"
                        className="fixed-navright mx-4 my-0"
                    >
                        <h3 className="my-0"> < TiDocumentText /> </h3>
                    </Link>

                    <Link to="/management"
                        className="fixed-navright mx-4 my-0"
                    >
                        <h3 className="my-0"> < MdManageAccounts /> </h3>
                    </Link>

                    <a type="button" onClick={refreshPage}
                        className="fixed-navright mx-4 my-0 mt-1"
                    >
                       <h4   className="my-0"> < GoSignOut /> </h4>
                    </a>
                         </div>
                    </div>
                
            </nav>
        
        <Switch>
            <Route exact path="/"><User /></Route>
            <Route path="/notice"><Notice /></Route>
            <Route path="/signin"><Signin /></Route>
            <Route path="/createreq"><CreateRequest /></Route>
            <Route path="/fixreq/:reqid"><EditRequest/></Route>
            <Route path="/management"><Management/></Route>
            
            <Route path="/:id">
                <h1>Undefined route</h1>
            </Route>
        </Switch>
          


        </div>
    )
}

export default Navbar

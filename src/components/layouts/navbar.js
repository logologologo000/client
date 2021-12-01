import React from 'react'
import '../css/Navbar.css'
import {Link, Route, Switch} from 'react-router-dom'
import Admin from '../admin/Admin.js'
import Answer from '../admin/Answer.js'
import Management from '../admin/Management.js'
import Signin from '../Signin.js'
import MFixAdmin from '../admin/MFix.js'
import CreateNo from '../admin/CreateNo.js'
import FixReq from '../admin/FixReq.js'
import EditNo from '../admin/EditNo.js'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'
import { useContext } from 'react'
import { MdManageAccounts } from 'react-icons/md';
import { GoSignOut } from 'react-icons/go';
import { TiDocumentText } from 'react-icons/ti';
import { IoIosList } from 'react-icons/io';


function Navbar() {
    let history = useHistory();
    const db = useContext(dbContext)
    console.log(db)
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

                
                    <h3 className="direct-btn my-1 navbar-toggler  togglor-custom pb-4 " data-bs-toggle="collapse"  
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false"    
                    aria-label="Toggle navigation">< IoIosList /></h3>
            </div>
            
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                        

                   
                        <a  disabled
                        className=" dpib mx-4 my-2 disable"
                    >
                         {db[0].firstname}
                         .
                         {
                             db[0].lastname.substring(2, 0)
                         }
                    </a>

                    
                    <Link to="/managementans"
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
                        className="fixed-navright mx-4 my-0  pt-1"
                    >   
                        <h4   className="my-0"> < GoSignOut /> </h4>
                        
                    </a>

                    

                    
                         </div>
                    </div>
                
            </nav>
        
        <Switch>
            <Route exact path="/"><Admin /></Route>
            <Route path="/management"><Management /></Route>
            <Route path="/managementans"><Answer /></Route>
            <Route path="/signin"><Signin /></Route>
            <Route path="/fixmanagement/:user_id"><MFixAdmin/></Route>
            <Route path="/createnotice"><CreateNo/></Route>
            <Route path="/editnotice/:notice_id"><EditNo/></Route>
            <Route path="/fixreq/:reqid"><FixReq/></Route>
            <Route path="/:id">
                <h1>Undefined route</h1>
            </Route>
        </Switch>
          


        </div>
    )
}

export default Navbar

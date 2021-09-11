import React from 'react'
import Navbar from './layouts/navbar.js'
import NavbarUser from './layouts/navbarUser.js'
import Signin from './Signin.js'
import Admin from './admin/Admin.js'
import Register from './Register.js'
import User from './user/Users.js'
import CreateNo from './admin/CreateNo.js'
import EditNo from './admin/EditNo.js'
import Management from './admin/Management.js'
import MFixUser from './user/MFix.js'
import MFixAdmin from './admin/MFix.js'
import UserNoices from './user/Notice.js'
import CreateRequest from './user/CreateReq.js'
import FixReq from './admin/FixReq.js'
import {link, Router} from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react'
import { useBetween } from 'use-between'


function App() {


  



  return (

          <div>
            
              
            
              
            <Signin />

             {/*
            <NavbarUser />
            <Navbar />
            <Register />
            <Admin />
            <CreateNo />
            <EditNo />
            <Management />
            <MFixAdmin />
            <FixReq />
            

            <User />
            <CreateRequest />
            <UserNoices />
            <MFixUser /> */}

             
            
            
          </div>

  );
}




export default App;

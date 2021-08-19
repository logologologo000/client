import React from 'react'
import Navbar from './layouts/navbar.js'
import Signin from './Signin.js'
import Admin from './admin/Admin.js'
import Register from './Register.js'
import User from './user/Users.js'
import CreateNo from './admin/CreateNo.js'
import EditNo from './admin/EditNo.js'
import Management from './admin/Management.js'


function App() {
  return (

          <div>
            <Navbar />
            <CreateNo />
            <Management /> 
            
            
          </div>

  );
}

// ทำหน้า management fix

export default App;

import React from 'react'
import './css/Signin.css'
import './css/Body.css'
import Axios from 'axios'
import { useState } from 'react'
import Navbar from './layouts/navbar.js'
import NavbarUser from './layouts/navbarUser.js'


const Signin = () => {

    const [level, setLevel] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = () => {
        Axios.post('http://localhost:8000/login', {
            user_email: email,
            user_password: password
        }).then(( result ) => {
            setLevel(result.data)
        }).catch((err) => {console.log(err)})
     
    }
    
    
    if (level.level == 0) {
        return (
            <div>
                <NavbarUser />
            </div>
        )
    } else if ( level.level == 1) {
        return (
            <div>
                <Navbar />
            </div>
        )
    } else {

        return (
            <div>
                {/* {
                    employeesList.map((val, key) => {
                        return (
                            <div key={key} className="employee card">
                                <div className="card-body text-left">
                                    <p  className="card-text">Username : { val.username }</p>
                                    <p  className="card-text">Password : { val.password }</p>
                                    <p  className="card-text">Email : { val.email }</p>
                                </div>
                            </div>
                        )
                    })
    
                   
                } */}
                
                
                {/* <button type="submit" onClick={getEmployees} >show</button> */}
    
                <div className="container my-5 p-2 " >
                    <div className="row">
    
                        <div className="col-8 col-md-6 col-lg-5  m-auto ">
    
                            <form action="/login" className="p-5 formmmm" method="post">
                                <h3 className="color-yellow lt-sp text-center">SIGN IN</h3>
    
                                <hr />
    
                                <div className="my-3" >
                                    <label  className="mx-3 color-white" >username  </label>
                                    <input className="form-control input-r" type="text" name="email"
                                    onChange={ (e) => {
                                        setEmail(e.target.value)
                                    }} />
      
    
                                </div>
                                <div className="" >
                                    <label  className="mx-3 color-white " >password  </label>
                                    <input className="form-control input-r" type="password" name="password"
                                    onChange={ (e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
    
                                <hr />
                                <center>
                                    <div className="mt-5 " >
                                        <button  type="button" onClick={login} className="btn-yellow  ">
                                             <span>LOGIN</span>
                                        </button>
                                    </div> 
                                  <div className="mt-1" >
                                    <a className=""href="#" className="linker">register</a>
                                  </div>  
                                </center>
                                
                                
    
    
    
                            </form>
                        </div>
    
                    </div>
    
    
    
                </div>
                
                
    
            </div>
        )


    }
    

        

    }
    // const addEmployee = () => {
    //     Axios.post('http://localhost:8000/cre', {
    //         username: username,
    //         password: password
    //     }).then(() => {
    //         setEmployeesList([
    //             ...employeesList,
    //         {
    //             username: username,
    //             password: password
    //         }
    //         ])
    //     })
    // }

    // const [employeesList, setEmployeesList] = useState([]);
    // const getEmployees = () => {
    //     Axios.get('http://localhost:8000/acc').then((result) => {
    //         setEmployeesList(result.data)
            
    //     })
        
    // }




    


export default Signin

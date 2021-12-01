import React from 'react'
import './css/Signin.css'
import './css/Body.css'
import Axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import Navbar from './layouts/Navbar.js'
import NavbarUser from './layouts/NavbarUser.js'
import Register from './Register.js'
import {Link, Route, Switch} from 'react-router-dom'
import { GoSignIn } from 'react-icons/go';

export const dbContext = React.createContext()

const Signin = () => {

    const [registerbut, setRegisterbut] = useState(false)
    const [level, setLevel] = useState('')

    
    const [data, setData] = useState([])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const login = () => {
        Axios.post('http://localhost:8000/login', {
            username: username,
            password: password
        }).then(( result ) => {
            console.log(result.data)
            setData(result.data)
            setLevel(result.data[0].level)
            
        }).catch((err) => {
            alert("Invalid username or password")
        }
        )
     
    }


    const register = () => {
        setRegisterbut(true)
    }
    

    ////// enter //////////////////////////////////

     

    const handleKeypress = (e) => {
        
        var x = e.keyCode
        
      if (x == 13) {
        login();
        
      }
      
    };
    
    
    if (level === 0) {
        return (
            <div>
                <dbContext.Provider value={data}>
                <NavbarUser  />
                </dbContext.Provider>
            </div>
        )
    } else if ( level === 1 || level === 2 ) {
        return (
            <div>
                <dbContext.Provider value={data}>
                <Navbar />
                </dbContext.Provider>
            </div>
        )
    } else if ( registerbut == true) {
        return (
            <div>
                <Register />
                
            </div>
        )
    } else {

        return (
            <div>
                
    
                <div className="container my-5 p-2 " >
                    <div className="row">
    
                        <div className="col-8 col-md-6 col-lg-5  m-auto ">
    
                            <form  className="p-5 formmmm" method="post">
                                <h3 className="color-yellow lt-sp text-center">SIGN IN</h3>
    
                                <hr />
    
                                <div className="my-3" >
                                    <label  className="mx-3 color-white" >username  </label>
                                    <input className="form-control input-r" type="text" name="email"
                                    onChange={ (e) => {
                                        setUsername(e.target.value)
                                    }} />
      
    
                                </div>
                                <div className="" >
                                    <label  className="mx-3 color-white " >password  </label>
                                    <input className="form-control input-r" type="password" name="password"
                                    onChange={ (e) => {
                                        setPassword(e.target.value)
                                    }}
                                    onKeyDown={handleKeypress}
                                    />
                                </div>
    
                                <hr />
                                <center>
                                    <div className="mt-5 " >
                                        <button type='button'   onClick={login} className="btn-yellow  ">
                                             <span className='login-span'>login </span>
                                        </button>
                                    </div> 
                                  <div className="mt-1" >
                                    <a onClick={register} type="button" className="linker">register</a>
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
  
export default Signin

  
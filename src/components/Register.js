import React from 'react'
import './css/Register.css'
import Signin from './Signin.js'
import { useState } from 'react'
import Axios from 'axios'

function Register() {

  const [registerbut, setRegisterbut] = useState(false)
  const backlogin = () => {
    setRegisterbut(true)
  }

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [code, setCode] = useState('')
  const [subject, setSubject] = useState('')

 
  const register = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:8000/register', {
      username : username,
      password : password,
      email : email,
      firstname : firstname,
      lastname : lastname,
      code : code,
      subject : subject,
    }).then((response) => {
      
      
      if (!response.data.register_error) {
        
        backlogin()
      }else {
        window.alert(response.data.register_error[0])
      }
    }).catch((err) => {console.log(err)})
  }

  if (registerbut == true ) {
    return (
      <div>
          <Signin />
      </div>
  )
  }
  return (
    <div>
      <div className="container-fluid my-5 p-2">
        <div className="row">

          <div className="col-11 col-lg-7 col-md-9 m-auto formmmmre " >
            <form  className="p-5" >
              <h3 className="color-yellow lt-sp">STUDENT REGISTRATION</h3>
              <hr />
              <div className="row">
                {
                  //left side form
                }
                <div className="col col-6">
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="username">username </label>
                    <input onChange={(e) => { 
                      setUsername(e.target.value)
                    }}
                      className="form-control"
                      type="text"
                      name="username"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="password">password </label>
                    <input
                    onChange={(e) => { 
                      setPassword(e.target.value)
                    }}
                      className=" bigbig form-control boxgreen"
                      type="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="email">E-mail </label>
                    <input onChange={(e) => { 
                      setEmail(e.target.value)
                    }}
                     className="form-control" type="email" name="email" />
                  </div>

                </div>
                {
                  //right side form
                }
                <div className="col col-6">
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="firstname">firstname </label>
                    <input
                    onChange={(e) => { 
                      setFirstname(e.target.value)
                    }}
                      className="form-control"
                      type="text"
                      name="firstname"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="lastname">lastname </label>
                    <input
                    onChange={(e) => { 
                      setLastname(e.target.value)
                    }}
                      className="form-control"
                      type="text"
                      name="lastname"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="studentcode">student-code </label>
                    <input 
                    onChange={(e) => { 
                      setCode(e.target.value)
                    }}
                    className="form-control" type="text" name="email" />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3 " htmlFor="lastname">subject</label>

                    <select
                    onChange={(e) => { 
                      setSubject(e.target.value)
                    }}
                    className="form-select" aria-label="Default select example">
                      <option defaultValue>select section</option>
                      <option value="COM 1404 sec 2">COM 1404 sec 2</option>
                      <option value="COM 2540 sec 1">COM 2540 sec 1</option>
                      <option value="COM 3303 sec 11">COM 3303 sec 11</option>
                    </select>
                  </div>
                  <br />
                </div>


                <hr />
                {
                  //button
                }
                <center>
                  <div className="center-item">
                    <button onClick={register}
                      className="btn-yellow"

                    >
                      <span>submit</span>
                    </button>
                  </div>
                  <a type="button" onClick={backlogin} className="linker" >BACK</a>
                </center>
              </div>





            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

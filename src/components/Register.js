import React from 'react'
import './css/Register.css'

function Register() {
  return (
    <div>
      <div className="container my-5 p-2">
        <div className="row">

          <div className=" col-lg-7 col-md-9 m-auto formmmmre " >
            <form action="#" className="p-5" >
              <h3 className="color-yellow lt-sp">STUDENT REGISTRATION</h3>
              <hr />
              <div className="row">
                {
                  //left side form
                }
                <div className="col col-6">
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="username">username </label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="password">password </label>
                    <input
                      className=" bigbig form-control boxgreen"
                      type="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="email">E-mail </label>
                    <input className="form-control" type="email" name="email" />
                  </div>

                </div>
                {
                  //right side form
                }
                <div className="col col-6">
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="firstname">firstname </label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="lastname">lastname </label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="studentcode">student-code </label>
                    <input className="form-control" type="text" name="email" />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3 " htmlFor="lastname">subject</label>

                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue>select section</option>
                      <option value="1">COM 1404 sec 2</option>
                      <option value="2">COM 2540 sec 1</option>
                      <option value="3">COM 3303 sec 11</option>
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
                    <button
                      className="btn-yellow"

                    >
                      <span>submit</span>
                    </button>
                  </div>
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

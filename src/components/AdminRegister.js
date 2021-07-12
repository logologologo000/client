import React from 'react'
import './css/Register.css'

function AdminRegister() {
  return (
    <div>
      <div className="container my-5 p-2">
        <div className="row">

          <div className=" col-lg-7 col-md-9 m-auto">
            <form action="#" className="form-control p-5" id="formm ">
              <h3 className="">Admin REgistration</h3>
              <div className="row">
                {
                  //left side form
                }
                <div className="col col-6">
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="username">username </label>
                    <input
                      className="form-control boxgreen"
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
                    <input className="form-control boxgreen" type="email" name="email" />
                  </div>
                  
                </div>
                {
                  //right side form
                }
                <div className="col col-6">
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="firstname">firstname </label>
                    <input
                      className="form-control boxgreen"
                      type="text"
                      name="firstname"
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mx-3" htmlFor="lastname">lastname </label>
                    <input
                      className="form-control boxgreen"
                      type="text"
                      name="lastname"
                    />
                  </div>
                  
                </div>
              </div>

              {
                  //button
              }
              <div className="mt-5 mx-auto buttonsub">
                <button
                  className="btn btn-outline-success buttonsub scale-up-hor-center"

                >
                  <span>submit</span>
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister

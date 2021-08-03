import React from 'react'
import './css/Signin.css'
import './css/Body.css'


function signin() {
    return (
        <div>

            <div className="container my-5 p-2 " >
                <div className="row">

                    <div className="col-8 col-md-6 col-lg-5  m-auto ">

                        <form action="#" className="p-5 formmmm">
                            <h3 className="color-yellow">SIGN IN</h3>

                            <hr />

                            <div className="my-3" >
                                <label for="" className="mx-3 color-white" >username  </label>
                                <input className="form-control input-r" type="text" name="username" />
                            </div>
                            <div className="" >
                                <label for="" className="mx-3 color-white " >password  </label>
                                <input className="form-control input-r" type="password" name="password" />
                            </div>

                            <hr />
                            <center>
                                <div className="mt-5 center-item" >
                                    <button className="btn-yellow ">
                                         <span>LOGIN</span>
                                    </button>
                                </div> 
                              <div className="mt-1" >
                                <a href="#" className="linker">register</a>
                              </div>  
                            </center>
                            
                            



                        </form>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default signin

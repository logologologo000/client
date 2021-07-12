import React from 'react'
import './css/Signin.css'

function signin() {
    return (
        <div>

            <div className="container my-5 p-2 "  >
                <div className="row">

                    <div className="col col-7 col-md-5  m-auto ">

                        <form action="" className="form-control p-5" id="formm">
                            <h3 className="">LOGIN</h3>



                            <div className="my-3" >
                                <label for="" >username  </label>
                                <input className="form-control boxgreen" type="text" name="username" />
                            </div>
                            <div className="" >
                                <label for="" >password  </label>
                                <input className="form-control boxgreen" type="text" name="password" />
                            </div>
                            <div className="mt-4 mx-auto buttonsub" >
                                <button className="btn btn-outline-success"><span>submit</span></button>
                            </div>
                            <div className="mt-1 mx-auto buttonsub " >
                                <a href="#" className="linker">register</a>
                            </div>



                        </form>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default signin

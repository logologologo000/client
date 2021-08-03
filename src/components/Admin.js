import React from 'react'
import './css/Admin.css'

function admin() {
    return (
        <div>

            <div className="container-fluid ">
                <div className="row">
                    {
                        //Status
                    }
                    <div className="col-lg-4 col-md-5 col-sm-8 col-8 m-auto mt-4">
                        <div className="formmmm p-4">
                            <h6 className="color-white mb-3 lt-sp ">STATUS</h6>
                            <div className="border-content p-4 container">
                                <div className="row ">
                                    {
                                        //Left 
                                    }
                                    <div className="color-white lt-sp col-6 tac ">
                                        <p >
                                            requests
                                        </p>
                                        <p type="buttom" className="dot-red mx-auto mt-3">

                                        </p>
                                        <p type="buttom" className="dot-yellow mx-auto mt-4" >

                                        </p>
                                        <p type="buttom" className="dot-green mx-auto my-4">

                                        </p>
                                        <p >
                                            users
                                        </p>
                                        <p >
                                            notices
                                        </p>
                                        <p >
                                            TA
                                        </p>
                                    </div>
                                    {
                                        //Right 
                                    }
                                    <div className="color-white lt-sp col-6 tac ">
                                        <p >
                                            6
                                        </p>
                                        <p >
                                            2
                                        </p>
                                        <p >
                                            2
                                        </p>
                                        <p >
                                            2
                                        </p>
                                        <p >
                                            7
                                        </p>
                                        <p >
                                            3
                                        </p>
                                        <p >
                                            3
                                        </p>
                                    </div>
                                </div>




                            </div>
                        </div>

                    </div>
                    {
                        //Create Notice
                    }
                    <div className="col-lg-4 col-md-5 col-sm-8 col-8 m-auto mt-4">
                        <div className="formmmm tac p-4">
                            <div>

                                <h5 className="color-yellow lt-sp mx-3 ">CREATE NOTICE</h5>
                                <div type="buttom" className="ic-add mt-4" >+</div>
                            </div>

                            <div className="list-scroll p-2">
                                <div className="border-content-s mt-4 p-4">
                                    <p className="color-white m-auto">Not Found Object</p>
                                </div>
                                <div className="border-content-s mt-4 p-4">
                                    <p className="color-white m-auto">Not Found Object</p>
                                </div>
                                <div className="border-content-s mt-4 p-4">
                                    <p className="color-white m-auto">Not Found Object</p>
                                </div>
                                <div className="border-content-s mt-4 p-4">
                                    <p className="color-white m-auto">Not Found Object</p>
                                </div>
                                <div className="border-content-s mt-4 p-4">
                                    <p className="color-white m-auto">Not Found Object</p>
                                </div>
                                <div className="border-content-s mt-4 p-4">
                                    <p className="color-white m-auto">Not Found Object</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    {
                        //List req
                    }
                    <div className="col-lg-4 col-md-8 col-sm-8 col-8 m-auto mt-4">
                        <div className="formmmm p-4">
                            <input type="text" className="form-control searches m-auto"
                                placeholder="input someting..." />
                            <div className="border-content mt-3">
                                <div className="list-scroll p-3">
                                    {
                                        //loop here
                                    }
                                    <div className="p-2 tac">
                                        <h6 className="color-yellow lt-sp dpib">404 not found</h6>

                                        <div className="dpib f-r">
                                            <div type="button" className="bt-class lt-sp mx-3 ">
                                                <p className="pin">fix</p>

                                            </div>
                                            <div type="button" className="bt-class lt-sp  mb-3" data-bs-toggle="collapse" data-bs-target="#idcol1" >
                                                <p className="pin">view</p>
                                            </div>

                                        </div>
                                        <br />
                                        <div class="collapse" id="idcol1">
                                        
                                            <div class="py-1 dpib">

                                                <p className="color-white" >
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
                                                    ullam aliquam magnam! Exercitationem veritatis ab, sequi harum
                                                    blanditiis rem!
                                                </p>
                                            </div>
                                        </div>

                                        <hr class="mt-5" />
                                    </div>

                                    <div className="p-2 tac">
                                        <h6 className="color-yellow lt-sp dpib">404 not found</h6>

                                        <div className="dpib f-r">
                                            <div type="button" className="bt-class lt-sp mx-3 ">
                                                <p className="pin">fix</p>

                                            </div>
                                            <div type="button" className="bt-class lt-sp  mb-3" data-bs-toggle="collapse" data-bs-target="#idcol1" >
                                                <p className="pin">view</p>
                                            </div>

                                        </div>
                                        <br />
                                        <div class="collapse" id="idcol1">
                                            <div class="py-1 dpib">

                                                <p className="color-white" >
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
                                                    ullam aliquam magnam! Exercitationem veritatis ab, sequi harum
                                                    blanditiis rem!
                                                </p>
                                            </div>
                                        </div>

                                        <hr class="mt-5" />
                                    </div>

                                    <div className="p-2 tac">
                                        <h6 className="color-yellow lt-sp dpib">404 not found</h6>

                                        <div className="dpib f-r">
                                            <div type="button" className="bt-class lt-sp mx-3 ">
                                                <p className="pin">fix</p>

                                            </div>
                                            <div type="button" className="bt-class lt-sp  mb-3" data-bs-toggle="collapse" data-bs-target="#idcol1" >
                                                <p className="pin">view</p>
                                            </div>

                                        </div>
                                        <br />
                                        <div class="collapse" id="idcol1">
                                            
                                            <div class="py-1 dpib">

                                                <p className="color-white" >
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
                                                    ullam aliquam magnam! Exercitationem veritatis ab, sequi harum
                                                    blanditiis rem!
                                                </p>
                                            </div>
                                        </div>

                                        <hr class="mt-5" />
                                    </div>

                                    <div className="p-2 tac">
                                        <h6 className="color-yellow lt-sp dpib">404 not found</h6>

                                        <div className="dpib f-r">
                                            <div type="button" className="bt-class lt-sp mx-3 ">
                                                <p className="pin">fix</p>

                                            </div>
                                            <div type="button" className="bt-class lt-sp  mb-3" data-bs-toggle="collapse" data-bs-target="#idcol1" >
                                                <p className="pin">view</p>
                                            </div>

                                        </div>
                                        <br />
                                        <div class="collapse" id="idcol1">
                                            <div class="py-1 dpib">

                                                <p className="color-white" >
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
                                                    ullam aliquam magnam! Exercitationem veritatis ab, sequi harum
                                                    blanditiis rem!
                                                </p>
                                            </div>
                                        </div>

                                        <hr />
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default admin





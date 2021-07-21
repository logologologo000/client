import React from 'react'
import './css/User.css'

function users() {
    return (
        <div className="container-fluid">

            <div className="row mt-3">
                {
                    //  List
                }
                <div className="col-4">
                    <div className="card border-rg p-3 xcenter widthcard ">
                        <div className="h5 wordupper">My request</div>
                        <div className="area card widthcard list-scroll p-3 bg-gr " >
                            <div className="card-body pdd-0">
                                <div>
                                    <h5 className="card-title d-inline">404 Not Found</h5>
                                    <button

                                        className="d-inline-f-r btn btn-outline-success btn-sm  buttontext"

                                    >
                                        fix
                                    </button>
                                    <button
                                        className=" d-inline-f-r btn btn-outline-success btn-sm   buttontext"
                                        data-bs-toggle="collapse" data-bs-target="#idcol1"
                                    >
                                        view
                                    </button>
                                </div>
                                

                                
                                <br />
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    //  Detail
                }
                <div className="col-8">
                    <div className="card border-rg p-3 widthcard">
                    <div class="collapse" id="idcol1">
                                    <div class="py-1">

                                        <p >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
                                            ullam aliquam magnam! Exercitationem veritatis ab, sequi harum
                                            blanditiis rem!
                                        </p>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default users
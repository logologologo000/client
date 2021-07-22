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
                        <div type="button" className="btn btn-success bttp">
                            <div className="h5 inll">+</div>
                            </div>
                            <br />
                        <div className="area card widthcard list-scroll p-3 bg-gr " >
                            {
                                //loop here
                            }
                            <div className="">
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

                            
                                    <div className="">
                                        <div>
                                            <h5 className=" d-inline">Unexpected ";"</h5>
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
                <div className="col-8 collapse" id="idcol1">
                    <div className="card border-rg p-3 widthcard">
                                
                                    <div class="py-1 detail-requ">
                                        <div>
                                            <h3>Title</h3>
                                            <div className="area card widthcard p-3 bg-gr " >
                                                <div className="row">
                                                    <div className="col-6">
                                                          <img className="imgu" src="https://marcospernica.com/wp-content/themes/the-code-predator/img/default_thumbnail.jpg" /> 
                                                    </div>
                                                    <div className="col-6">
                                                          <h5>
                                                              Description
                                                          </h5>
                                                    </div>
                                                </div>
                                                

                                            </div>
                                            <br />
                                                <div className="area card widthcard p-3 bg-gr ">
                                                    ***note
                                                </div>
                                        </div>
                                    </div>
                               
                    </div>
                </div>
            </div>




        </div>
    )
}

export default users
import React from 'react'
import './css/Admin.css'

function admin() {
    return (
        <div>
            <div className="container-fluid mt-4">
                <div className="row">
                    {
                        //Status
                    }
                    <div className="col col-sm-5 col-12 mb-4" >

                        <div className="card  widthcard p-3">
                            <h5 className="card-title xcenter wordupper">
                                Status
                            </h5>
                            <div className="row">
                                <div className="col-6">
                                    <h6 className=" text-muted wordlower ">
                                        request
                                    </h6>
                                </div>
                                <div className="col-6">
                                    <h6 className=" text-muted wordlower ">
                                        56 unit
                                    </h6>

                                </div>
                            </div>


                        </div>


                    </div>

                    {
                        //List
                    }
                    <div className="col col-12 col-sm-7 ">
                        <div className="card  widthcard " id="contents">
                            <div className="card-body">
                                <h5 className="card-title">404 Not Found</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Pannawit</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
                                    ullam aliquam magnam! Exercitationem veritatis ab, sequi harum
                                    blanditiis rem!
                                </p>

                                <button

                                    className="btn btn-success btn-sm mr-3 buttontext"

                                >
                                    view
                                </button>
                                <button
                                    className="btn btn-success btn-sm  my-1 buttontext"

                                >
                                    des
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default admin

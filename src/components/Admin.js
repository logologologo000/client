import React from 'react'
import './css/Admin.css'

function admin() {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
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
                               
                                className="btn btn-outline-success btn-sm mr-3 buttontext"
                                
                            >
                                view
                            </button>
                            <button
                                className="btn btn-outline-success btn-sm mx-2 my-1 buttontext"
                                
                            >
                                edit
                            </button>
                            <button
                                className="btn btn-outline-success btn-sm buttontext"
                               
                            >
                                contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default admin

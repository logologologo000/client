import React from 'react'
import '../css/User.css'
import {Link, Route, Switch} from 'react-router-dom'

function users() {
    return (
        <div className="container-fluid">

            <div className="row">
                {
                    //  List
                }
                <div className="col-10 col-sm-7 col-md-4 mt-4  m-auto">
                    <div className="formmmm p-4 tac">
                        <div className="h5 lt-sp color-yellow tests">MY REQUESTS</div>
                        <Link to="/createreq" type="button" className="ic-add mt-4">
                            +
                        </Link>
                        <br />
                        <div className="list-scroll-cus p-3 border-content mt-4" >
                            {
                                //loop here
                            }
                            <div className="">
                                <div>
                                    <h6 className="color-yellow dpib f-l">404 Not Found</h6>
                                    <div className="dpib f-r">
                                        <div

                                            className="bt-class lt-sp "

                                        >
                                            <Link to="/fixreq"  className="">
                                            <p className="pin ">fix</p>
                                            </Link>
                                        </div>
                                        <div
                                            data-bs-toggle="collapse" data-bs-target="#idcol1"
                                            className="bt-class lt-sp "

                                        >
                                            
                                            <p className="pin " type="button">view</p>
                                            
                                        </div>
                                    </div>


                                </div>
                                <br />
                                <br />
                               
                                <hr />


                            </div>

                            




                        </div>
                    </div>
                </div>
                {
                    //  Detail
                }
                <div className="col-12 col-sm-12 col-md-8  m-auto my-4" >
                    <div className=" p-3  formmmm">

                        <div class="py-1 detail-requ collapse" id="idcol1">

                            <h4 className="color-yellow lt-sp">Title</h4>
                            <div className="white-content p-3 mt-4" >

                                <div className="dpib">
                                    <img className="imgu" src="https://marcospernica.com/wp-content/themes/the-code-predator/img/default_thumbnail.jpg" />
                                </div>
                                <div className="mx-3 dpib desc ">
                                    <h5 className="">
                                        Description
                                    </h5>
                                    <div className="desc-scroll">
                                        <p className="desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.</p>
                                    </div>

                                </div>



                            </div>
                            <br />

                            <div className="white-content p-3 note">
                            <h5 className="">
                                        Notice
                                    </h5>
                                <div className="note-scroll">

                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio vel quae velit incidunt illum voluptatum iste architecto eum vitae.</p>
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
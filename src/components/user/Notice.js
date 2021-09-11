import React from 'react'

const Notice = () => {
    return (
        <div>
            <div className="container-fluid">
            <div className="row">
                {
                    //  List
                }
                <div className="col-10 col-sm-7 col-md-4 mt-4  m-auto">
                    <div className="formmmm p-4 tac">
                        <div className="h5 lt-sp color-yellow tests">NOTICE</div>
                        
                        
                        <div className="list-scroll-full p-3 border-content mt-3" >
                            {
                                //loop here
                            }
                            <div className="">
                                <div>
                                    <h6 className="color-yellow dpib f-l">404 Not Found</h6>
                                    <div className="dpib f-r">
                                        
                                        <div
                                            data-bs-toggle="collapse" data-bs-target="#idcol1"
                                            className="bt-class lt-sp "

                                        >
                                            <p className="pin ">view</p>
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
                    <div className=" p-3  formmmmre">

                        <div class="py-1 detail-requ collapse" id="idcol1">

                            <h4 className="color-white lt-sp">Title</h4>
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
                            

                            
                        </div>

                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Notice
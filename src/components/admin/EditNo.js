import React from 'react';

const EditNo = () => {

    return (
        <div className="container">
            <div className="formmmm my-3 text-center p-4 col-10  col-md-10 mx-auto">
                <h4 className="color-yellow lt-sp">CREATE NOTICE</h4>
                <div className="border-content mt-3 p-3">
                    <div className="p-3">
                        <label className="f-l">title</label>
                        <div className="cus-up ">
                            <input type="text" className="input-note col-md-7 "/>
                        </div>
                        <hr class="mt-2 mb-0" />
                    </div>
                    
                    <div className="p-3">
                        <label className="f-l">image</label>
                        <div className="cus-up">
                            <div type="button" className=" upload-btn color-white">
                                <span className="spann"> file  </span>
                            </div>
                        </div>
                        <hr class="mt-2 mb-0" />
                    </div>

                    <div className="p-3">  
                        <label className="d-block">description</label>
                        <input type="text" className="d-block input-note-area my-3"/>
                        <hr class="mt-2 mb-0" />
                    </div>
                   
                    <div className="d-block mt-2 px-3">
                        <div type="button" className="direct-btn f-l">
                            <span className="spann">back</span>
                        </div>
                        <div type="button"  className="direct-btn f-r">
                            <span  className="spann">accept</span>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    )

}

export default EditNo;
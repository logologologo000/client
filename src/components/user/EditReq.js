import React from 'react'

const EditRequest = () => {
    return (
        <div className="">
            <div className="container-fluid formmmm-fix mt-4 p-3 text-center">
                <h5 className="color-yellow lt-sp mt-2">EDIT REQUEST</h5>
                <div className="border-content mt-3 p-3">
                    
                        <div className="flex-container flex-height-fix">
                            <div className="dpib text-start f-l wrap-fix p-3">
                                <p className="color-white lt-sp">title</p>
                                <input type="text" className="form-control" />

                                <p className="color-white lt-sp mt-5">image</p>
                                <div type="button" className=" upload-btn color-white">
                                    <span className="spann"> file  </span>
                                </div>

                            </div>
                            <div className="dpib text-start f-r wrap-fix p-3">
                                <p className="color-white lt-sp">description</p>
                                <textarea className=""></textarea>
                            </div>
                        </div>

                        
                   
                        <div className="">
                                <div type="button" className="direct-btn f-l">
                                    <span className="spann">back</span>
                                </div>
                                <div type="button" className="direct-btn f-r">
                                    <span className="spann">confirm</span>
                                </div>
                        </div>   
                </div>

                

            </div>
            
        </div>
    )
}

export default EditRequest
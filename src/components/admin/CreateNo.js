import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import {Link, Route, Switch} from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'
import { useContext } from 'react'
import { TiArrowRightThick } from 'react-icons/ti';
import { TiArrowLeftThick } from 'react-icons/ti';

const CreateNo = () => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    const [detail, setDetail] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', title)
        formData.append('detail', detail)
        
        
        
        try {
            const res = await Axios.post('http://localhost:8000/createnotice', formData , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    
                }
            })
            
            window.alert('Create Success')
            history.push("/");
        } catch (err) {
            if (err) {
                window.alert(err.response.data.msg)
                console.log(err.response.data.msg)
            } else {
                console.log(err.response.data.msg)
            }
        }
        

}
        
    return (
        <div className="container">
            <div className="formmmm my-3 text-center p-4 col-10  col-md-10 mx-auto">
                <h4 className="color-yellow lt-sp">CREATE NOTICE</h4>
                <div className="border-content mt-3 p-3">
                    <div className="p-3">
                        <label className="f-l">title</label>
                        <div className="cus-up ">
                            <input 
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            type="text" className="input-note col-md-7 "/>
                        </div>
                        <hr class="mt-2 mb-0" />
                    </div>
                    
                    <div className="p-3">
                        <label className="f-l">image</label>
                        <div className="cus-up">
                            <input
                            onChange={(e) =>{
                                setFile(e.target.files[0])
                            }}
                            type="file" className=" upload-btn color-white custom-file-input"/>
                                
                            
                        </div>
                        <hr class="mt-2 mb-0" />
                    </div>

                    <div className="p-3">  
                        <label className="d-block">description</label>
                        <textarea onChange={(e) =>{
                            setDetail(e.target.value)
                        }}  
                        className="d-block input-note-area my-3"></textarea>
                        
                    </div>
                   
                    <div className="d-block mt-2 px-3">
                        <div type="button" className="direct-btn f-l"
                        onClick={() =>{
                            history.push("/")
                        }}
                        >
                           <h5 className="my-0 pb-1">< TiArrowLeftThick /></h5>
                        </div>
                        <div type="button" onClick={onSubmit}   className="direct-btn f-r">
                        <h5 className="my-0 pb-1">< TiArrowRightThick /></h5>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    )

}

export default CreateNo;
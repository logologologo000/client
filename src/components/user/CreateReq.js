import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Link, Route, Switch} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { dbContext } from '../Signin'
import { useContext } from 'react'




const CreateRequest = () => {
    const db = useContext(dbContext)
    let history = useHistory();
    
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [port, setPort] = useState(0)
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})
    
    const onChange = (e) => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
        
        }
        
    const onSubmit = async (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append('file', file)
            formData.append('user_id', db[0].user_id)
            formData.append('title', title)
            formData.append('detail', detail)
            formData.append('port', port)
            
            
            try {
                const res = await Axios.post('http://localhost:8000/createreq', formData , {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                        
                    }
                })
                
                const { fileName, filePath } = res.data
                setUploadedFile(fileName, filePath)
                
            } catch (err) {
                if (err) {
                    console.log(err.response.data.msg)
                } else {
                    console.log(err.response.data.msg)
                }
            }
            history.push("/");

    }

    

    
    

    return (
        <div className="">
            <div className="container-fluid formmmm-fix mt-4 p-3 text-center">
                <h5 className="color-yellow lt-sp mt-2">CREATE REQUEST</h5>
                    
                <form>
                <div className="border-content mt-3 p-3">
                    
                        <div className="flex-container flex-height-fix">
                            <div className="dpib text-start f-l wrap-fix p-3">
                                <p className="color-white lt-sp">title</p>
                                <input  onChange={(e) => { 
                                    setTitle(e.target.value)
                                }} type="text" className="form-control" placeholder="title..." />
                                <p className="color-white lt-sp mt-2">port</p>
                                <input  onChange={(e) => { 
                                    setPort(e.target.value)
                                }} type="text" className="form-control" placeholder="PORT..."  />

                                <p className="color-white lt-sp mt-3 ">image</p>
                                <input onChange={onChange} type="file" className=" upload-btn color-white custom-file-input"/>
                                    <span className="spann"> file  </span>
                                

                            </div>
                            <div className="dpib text-start f-r wrap-fix p-3">
                                <p className="color-white lt-sp">description</p>
                                <textarea onChange={(e) => { 
                                    setDetail(e.target.value)
                                }} className=""  placeholder="detail..." ></textarea>
                            </div>
                        </div>

                        
                   
                </div>
                        <div className="mt-2">
                                <Link to="/"type="button" className="direct-btn f-l">
                                    <span className="spann">back</span>
                                </Link>
                                <div onClick={onSubmit} type="button" className="direct-btn f-r">
                                    <span className="spann">confirm</span>
                                </div>
                        </div>   
            </form>
                

            </div>
            
        </div>
    )
}

export default CreateRequest
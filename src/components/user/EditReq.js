import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import {Link, Route, Switch} from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'
import { useContext } from 'react'


const EditRequest = () => {
    
    const {reqid} = useParams()
    const db = useContext(dbContext)
    let history = useHistory();
    
    

    useEffect(() => {
        
        
        console.log(
          "This only happens ONCE.  But it happens AFTER the initial render."
        );
        try {

            Axios.post('http://localhost:8000/getreq', {
                request_id : reqid
            }).then((result) => {
                setRequest(result.data)  
                setTitle(result.data.title)
                setDetail(result.data.detail)
                setPort(result.data.port)
                setRequest_id(result.data.request_id)

            })
                
            } catch (err) {
                console.error(err)
            }
        
      }, []);

      const [request, setRequest] = useState([])
      const [title, setTitle] = useState('')
      const [detail, setDetail] = useState('')
      const [port, setPort] = useState(0)
      const [request_id, setRequest_id] = useState(0)
      const [file, setFile] = useState('')
      
      
     

      
        const onSubmit = async (e) => {

            e.preventDefault()

          if (file == '') {

            Axios.post('http://localhost:8000/editreq', {
                title: title,
                detail: detail,
                port: port,
                request_id: request_id
            }).then(()=> {
              history.push("/");
            })
            

          } else {
                e.preventDefault()
                const formData = new FormData()
                formData.append('file', file)
                formData.append('request_id', request_id)
                formData.append('title', title)
                formData.append('detail', detail)
                formData.append('port', port)
            
                
                console.log(request_id)

                try {
                    const res = await Axios.post('http://localhost:8000/editreqimg', formData , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    history.push("/");
                } catch (err) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(err)
                    }
                }
          }
       
        }

        const onDelete = () => {

            Axios.delete(`http://localhost:8000/deletereq/${request_id}`)
            .then((result) => {
               window.alert(result.data)
               
            })
            history.push("/");
        }
   
        
       
   

    return (
        <div className="">
            
            <div className="container-fluid formmmm-fix mt-4 p-3 text-center">
                <h5 className="color-yellow lt-sp mt-2">EDIT REQUEST</h5>
                <form>
                <div className="border-content mt-3 p-3">
                    
                        <div className="flex-container flex-height-fix-cus">
                            <div className="dpib text-start f-l wrap-fix p-3">
                                <p className="color-white lt-sp">title</p>
                                <input onChange={(e) => {
                                    setTitle(e.target.value);
                                    
                                }}  value={title}  type="text" className="form-control" placeholder="title..." />
                                <p className="color-white lt-sp mt-2">port</p>
                                <input onChange={(e) => {
                                    setPort(e.target.value);
                                    
                                }}  value={port}   type="text" className="form-control" placeholder="PORT..."  />

                                <p className="color-white lt-sp mt-3 ">image</p>
                                <input onChange={(e) => {
                                    setFile(e.target.files[0])
                                }}type="file" className=" upload-btn color-white custom-file-input"/>
                                    <span className="spann"> file  </span>
                                

                            </div>
                            <div className="dpib text-start f-r wrap-fix p-3">
                                <p className="color-white lt-sp">description</p>
                                <textarea onChange={(e) => {
                                    setDetail(e.target.value);
                                    
                                }}  value={detail}  className=""  placeholder="detail..." ></textarea>
                            </div>
                        </div>
                        <div onClick={() => {
                           if(window.confirm(`Do you want to Delete Title : ${title} ???`)){
                               onDelete()

                           } 
                        }}
                        type="button" className="delete-btn f-l">
                                    <span className="spann">delete</span>
                        </div>
                                <br />
                        
                   
                </div>
                        <div className="mt-2">
                                <Link to="/"type="button" className="direct-btn f-l">
                                    <span className="spann">back</span>
                                </Link>
                                
                                <div onClick={onSubmit}  type="button" className="direct-btn f-r">
                                    <span className="spann">confirm</span>
                                </div>
                        </div>   
            </form>

                

            </div>
            
        </div>
    )
}

export default EditRequest
import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import {Link, Route, Switch} from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'
import { useContext } from 'react'
import { TiArrowLeftThick } from 'react-icons/ti';
import { TiArrowRightThick } from 'react-icons/ti';


const FixReq = () => {

    const {reqid} = useParams()
    const db = useContext(dbContext)
    let history = useHistory();
    const [request, setRequest] = useState([])
    const [notice, setNotice] = useState('')
    useEffect(() => {
        Axios.post('http://localhost:8000/getreq', {
            request_id : reqid
        }).then((response) => {
            setRequest(response.data)
        })
    }, [])

    const send = () => {
        Axios.post('http://localhost:8000/setnotice', {
            request_id : reqid,
            notice : notice
        })
        history.push("/");
    }
    
    return (
        <div>
            <div className="container-fluid formmmmre my-4 p-3 text-start col-10  col-lg-6">
                <h4 className="color-white lt-sp dpib">{request.title}</h4>
                <div type="button"  className="direct-btn f-r mt-2">
                    <span  className="spann">entry</span>
                </div>
                
                <div className="border-content mt-3 flex-container text-center">
                    <div className="inflex-req dpib">
                    <img className="imgu-fix resize" src={`/uploads/${request.img}`} />
                    </div>

                    <div className="inflex-req dpib">
                        
                                    <h5 className="color-white lt-sp">
                                        Description
                                    </h5>
                                    <div className="desc-scroll-fix">
                                        <p className="desc-text color-white">{request.detail}</p>
                                    </div>

                        
                    </div>

                    <div className="inflex-req dpib">
                    <textarea onChange={(e) => { 
                        setNotice(e.target.value)
                    }} className="" placeholder="notice here..."></textarea>
                    </div>
                    
                   
                </div>
                 <div className="dpb mt-2 px-3">

                        <div onClick={() => { 
                            
                            history.push("/")
                                
                            }}
                        type="button" className="direct-btn f-l">
                            <h5 className="my-0 pb-1">< TiArrowLeftThick /></h5>
                        </div>

                        <div onClick={() => { 
                                if (window.confirm('Confirm to accept')) {
                                   send() 
                                }
                                
                            }} type="button"  className="direct-btn f-r">
                            <h5 className="my-0 pb-1">< TiArrowRightThick /></h5>
                        </div>
                </div>
                <br />
                
            </div>
        </div>
    )
}

export default FixReq
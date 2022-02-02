import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'
import { useContext } from 'react'
import { TiArrowLeftThick } from 'react-icons/ti';
import { TiArrowRightThick } from 'react-icons/ti';
import Getanswer from './answer/Getanswer'
import { RiSave2Fill } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";
import axios from 'axios';



const FixReq = () => {

    const { reqid } = useParams()
    const db = useContext(dbContext)
    let history = useHistory();
    const [request, setRequest] = useState([])
    const [notice, setNotice] = useState('')
    const [datetime, setDatetime] = useState(' ')
    useEffect(() => {
        Axios.post('http://localhost:8000/getreq', {
            request_id: reqid
        }).then((response) => {
            setRequest(response.data)

        })


        setDateTime()


    }, [request.createdate])


    const [valuex, setValuex] = useState([])

    const send = () => {
        Axios.post('http://localhost:8000/setnotice', {
            request_id: reqid,
            notice: notice
        })

        console.log(valuex)

        valuex.map((response, key) => {
            console.log(response)
            Axios.post(`http://localhost:8000/setanswerid/${response}`, {
                request_id: reqid,

            })
        })
        history.push("/");
    }

    const Clear = () => {
        setNotice("")
    }

    const setAnswerNo = (answer) => {
        let ans = notice + answer
        setNotice(ans)
    }

    const setDateTime = () => {

        var test = new Date(request.createdate)
        var tz = test.getHours() - 7
        test.setHours(tz)
        var show = (test.toString()).substring(21, 0)
        console.log(show)
        setDatetime(show)

    }


    console.log(request.status)

    if (request != null) {
        
    }
    
    if (request.status == 2) {
        
        return (
            <div className="flex-container">
                <div className="flex-container">
                    <div className="formmmmre my-4 p-3 text-start dpib">
                        <h4 className="color-white lt-sp dpib">{request.title}</h4>
                        <div type="button" className="direct-btn f-r ">
                            <span className="spann">{request.port}</span>
                        </div>
                        <p className="color-yellow lt-sp d-block my-1 text-center">{datetime}</p>

                        <div className="border-content  flex-container text-center">
                            <div className="inflex-req dpib">
                                <img style={{ width: 350 }} className="imgu-fix resize" src={`/uploads/${request.img}`} />
                            </div>

                            <div className="inflex-req dpib">

                                <h5 className="color-white lt-sp">
                                    Description
                                </h5>
                                <div className="desc-scroll-fix">
                                    <p className="desc-text color-white">{request.detail}</p>
                                </div>


                            </div>




                        </div>



                    </div>

                    {/* <div className="formmmmre my-4 p-3 text-start dpib mx-4">


                        <div style={{ height: 490 }} className="border-content  text-center">


                            <div className=" mt-2 d-block">
                                <textarea style={{ height: 350, width: 350 }} onChange={(e) => {
                                    setNotice(e.target.value)
                                }}
                                    value={notice}
                                    className="" placeholder="notice here..."></textarea>

                            </div>

                            <div className="dpb mt-2 px-3">

                                <div onClick={() => {

                                    history.push("/")

                                }}
                                    type="button" className="direct-btn ">
                                    <h5 className="my-0 pb-1">< TiArrowLeftThick /></h5>
                                </div>

                                <div onClick={() => {
                                    if (window.confirm('Confirm to accept')) {
                                        send()
                                    }

                                }} type="button" className="direct-btn mx-3">
                                    <h5 className="my-0 pb-1">< RiSave2Fill /></h5>
                                </div>

                                <div onClick={() => {
                                    if (window.confirm('Confirm to Clear')) {
                                        Clear()
                                    }
                                    // console.log(valuex)

                                }} type="button" className="direct-btn ">
                                    <h5 className="my-0 pb-1">< GrPowerReset /></h5>
                                </div>
                            </div>

                        </div>




                    </div> */}

                    
                </div>
            </div>
        )
    } else {


        return (
            <div className="flex-container">
                <div className="flex-container">
                    <div className="formmmmre my-2 p-3 text-start dpib">
                        <h4 className="color-white lt-sp dpib">{request.title}</h4>
                        <div type="button" className="direct-btn f-r ">
                            <span className="spann">{request.port}</span>
                        </div>
                        <p className="color-yellow lt-sp d-block my-1 text-center">{datetime}</p>

                        <div className="border-content  flex-container text-center">
                            <div className="inflex-req dpib">
                                <img style={{ width: 350 }} className="imgu-fix resize" src={`/uploads/${request.img}`} />
                            </div>

                            <div className="inflex-req dpib">

                                <h5 className="color-white lt-sp">
                                    Description
                                </h5>
                                <div className="desc-scroll-fix">
                                    <p className="desc-text color-white">{request.detail}</p>
                                </div>


                            </div>




                        </div>



                    </div>

                    <div className="formmmmre my-4 p-3 text-start dpib mx-4">


                        <div style={{ height: 490 }} className="border-content  text-center">


                            <div className=" mt-2 d-block">
                                <textarea style={{ height: 350, width: 350 }} onChange={(e) => {
                                    setNotice(e.target.value)
                                }}
                                    value={notice}
                                    className="" placeholder="notice here..."></textarea>

                            </div>

                            <div className="dpb mt-2 px-3">

                                <div onClick={() => {

                                    history.push("/")

                                }}
                                    type="button" className="direct-btn ">
                                    <h5 className="my-0 pb-1">< TiArrowLeftThick /></h5>
                                </div>

                                <div onClick={() => {
                                    if (window.confirm('Confirm to accept')) {
                                        send()
                                    }

                                }} type="button" className="direct-btn mx-3">
                                    <h5 className="my-0 pb-1">< RiSave2Fill /></h5>
                                </div>

                                <div onClick={() => {
                                    if (window.confirm('Confirm to Clear')) {
                                        Clear()
                                    }
                                    // console.log(valuex)

                                }} type="button" className="direct-btn ">
                                    <h5 className="my-0 pb-1">< GrPowerReset /></h5>
                                </div>
                            </div>

                        </div>




                    </div>

                    < Getanswer setAnswerNo={setAnswerNo} valuex={valuex} />
                </div>
            </div>
        )
    }
}

export default FixReq
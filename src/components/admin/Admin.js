import React from 'react'
import '../css/Admin.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { dbContext } from '../Signin'

function Admin() {
    const [requests, setRequests] = useState([])
    const [users, setUsers] = useState([])
    const [notices, setNotices] = useState([])
    const [ta, setTa] = useState(0)
    const [status0, setStatus0] = useState(0)
    const [status1, setStatus1] = useState(0)
    const [status2, setStatus2] = useState(0)

    useEffect(() => {

        // get status 0
        Axios.get('http://localhost:8000/getreqsstatus0').then((response) => {
            setStatus0(response.data.length)
        })
        // get status 1
        Axios.get('http://localhost:8000/getreqsstatus1').then((response) => {
            setStatus1(response.data.length)
        })
        // get status 2
        Axios.get('http://localhost:8000/getreqsstatus2').then((response) => {
            setStatus2(response.data.length)
        })

        // get reqs with status 0 and 1
        Axios.get('http://localhost:8000/getreqsstatus').then((response) => {
            setRequests(response.data)
            setFilterSearch(response.data)
        })

        //get all users
        Axios.get('http://localhost:8000/getallusers').then((response) => {

            setUsers(response.data)

        })

        //get TA
        Axios.get('http://localhost:8000/getallta').then((response) => {
            setTa(response.data.length)

        })

        // get notices
        Axios.get('http://localhost:8000/getallnotices').then((response) => {

            setNotices(response.data)
        })

    }, [])

    const [filterSearch, setFilterSearch] = useState([])
    const searchFunc = async (e) => {
        
        const wording = e.target.value
        const newFilter = requests.filter((value) => {
            
            return value.title.toLowerCase().includes(wording.toLowerCase())
        })
        setFilterSearch(newFilter)
        
       
       
   }
   
    return (
        <div>

            <div className="container-fluid ">
                <div className="row">
                    {
                        //Status
                    }
                    <div className="col-lg-4 col-md-5 col-sm-8 col-8 m-auto mt-4">
                        <div className="formmmm p-4">
                            <h6 className="color-white mb-3 lt-sp ">STATUS</h6>
                            <div className="border-content">

                                <div className="container" >

                                    <table className="color-white lt-sp m-auto mt-4">

                                        <tr>
                                            <td>requests</td>
                                            <td>{requests.length}</td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p type="buttom" className="dot-red m-auto">
                                                </p>
                                            </td>
                                            <td>{status0}</td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p type="buttom" className="dot-yellow m-auto" >

                                                </p>
                                            </td>
                                            <td>{status1}</td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p type="buttom" className="dot-green m-auto">
                                                </p>
                                            </td>
                                            <td>{status2}</td>

                                        </tr>
                                        <tr>
                                            <td>

                                                users

                                            </td>
                                            <td>{users.length}</td>

                                        </tr>
                                        <tr>
                                            <td>notices</td>
                                            <td>{notices.length}</td>

                                        </tr>
                                        <tr>
                                            <td>TA</td>
                                            <td>{ta}</td>

                                        </tr>


                                    </table>





                                </div>




                            </div>
                        </div>

                    </div>
                    {
                        //Create Notice
                    }
                    <div className="col-lg-4 col-md-5 col-sm-8 col-8 m-auto mt-4">
                        <div className="formmmm tac p-4">
                            <div>

                                <h5 className="color-yellow lt-sp mx-3 ">CREATE NOTICE</h5>


                                <Link to="/createnotice" type="button" className="ic-add mt-4" >
                                    +
                                </Link>

                            </div>
                            <div className="create-notice-border mt-3">
                                <div className="list-scroll p-2">
                                    {
                                        //loop here
                                    }
                                    {
                                        notices.map((response, key) => {
                                            return (
                                                
                                                <div key={key} id={key} onMouseEnter={() => { 
                                                    console.log(response.img)
                                                    // document.getElementById(key).style = 
                                                    // `
                                                    // background-image : url(/uploads/notice/${response.img});
                                                    // `
                                                    // document.getElementById(key).classList = 'resize'
                                                }} >



                                                    <div className="border-content-s mt-4">
                                                        <Link to={`/editnotice/${response.notice_id}`}>
                                                            <p className="color-white m-auto p-4">{response.title}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    

                                    

                                </div>
                            </div>
                            
                        </div>


                    </div>
                    {
                        //List req
                    }
                    <div className="col-lg-4 col-md-8 col-sm-8 col-8 m-auto my-4 ">
                        <div className="formmmm p-4">
                            <input 
                            onChange={searchFunc}
                            type="text" 
                            className="form-control searches m-auto"
                            placeholder="input someting..." 
                            />
                            <div className="border-content mt-3">
                                <div className="list-scroll p-3">
                                    {
                                        //loop here
                                    }

                                    {
                                        filterSearch.map((response, key) => {

                                            return (

                                                <div key={key}>
                                                    <div className="p-2 tac">
                                                        <h6 className="color-yellow lt-sp dpb mx-5">
                                                            {response.title}
                                                        </h6>

                                                        <div className="dpib">
                                                            <Link to={`/fixreq/${response.request_id}`} type="button" className="bt-class lt-sp mx-3 "
                                                            onMouseOver={() => {
                                                                document.getElementById(`${response.request_id}`).style.display = 'block' 
                                                                
                                                               
                                                            }} 
                                                            onClick={() => {
                                                                //set req status
                                                                Axios.post('http://localhost:8000/setstatusreq', 
                                                                {
                                                                    request_id : response.request_id,
                                                                    status : 1
                                                                })
                                                            }}

                                                            onMouseOut={() => {
                                                                document.getElementById(`${response.request_id}`).style.display = 'none' 
                                                            }}
                                                            >
                                                                <p className="pin">fix</p>

                                                            </Link>
                                                            

                                                        </div>
                                                        <br />
                                                        <div class="collapse" 
                                                        id={response.request_id}
                                                        >

                                                            <div class="py-1 dpib">

                                                                <p className="color-white" >
                                                                    {response.detail}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <hr class="" />
                                                    </div>
                                                </div>

                                            )

                                        })
                                    }







                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Admin





import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";

const Management = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/getallusers').then((response) => {
            setUsers(response.data)
            setFilterSearchTA(response.data)
            setFilterSearchStudent(response.data)
        })
        
    }, [])
    
    const [filterSearchTA, setFilterSearchTA] = useState([])
    const searchFuncTA = async (e) => {
        
        const wording = e.target.value
        const newFilter = users.filter((value) => {
            
            return value.code.toLowerCase().includes(wording.toLowerCase())
        })
        setFilterSearchTA(newFilter)
        
    }

    const [filterSearchStudent, setFilterSearchStudent] = useState([])
    const searchFuncStudent = async (e) => {
        
        const wording = e.target.value
        const newFilter = users.filter((value) => {
            
            return value.code.toLowerCase().includes(wording.toLowerCase())
        })
        setFilterSearchStudent(newFilter)
        
    }

    return (
        <div className="container-fluid flex-container text-center ">
            <div className=" my-4 dpib mx-2">
                <div className="formmmm-fix p-3 text-start">
                    <h4 className="color-yellow mt-2 dpib lt-sp">TEACHER ASSIST</h4>
                    <input onChange={searchFuncTA} type="text" className="f-r my-2 input-note" placeholder="input ..."/>
                    <div className="border-content mt-1 p-2 ">
                        <div className="text-start manage-scroll px-2 ">

                            {
                                //loop here
                            }

                            {
                                filterSearchTA.map((result, key) => {

                                                var xxx
                                                if (result.firstname.length > 15) {
                                                    xxx = "..."
                                                }
                                    if (result.level == 1) {
                                        return (

                                            <div className="mt-3">
                                                <h5 className="dpb color-yellow lt-sp">{result.code}</h5>
                                                <p className="dpib color-white mb-1 lt-sp">{result.firstname.substring(15,0)}{xxx}</p>
                                                <Link to={`/fixmanagement/${result.user_id}`} className="dpib upload-btn f-r color-white" type="button">
                                                    <span className="spann">
                                                        fix
                                                    </span>
                                                </Link> 
                                                <hr class="mt-2 mb-0"/>
                                            </div>


                                        )
                                    }
                                })
                            }
                           
                            

                            
                            
                            


                        </div>
                    </div>
                </div>
            </div>

            <div className=" my-4 dpib mx-2">
                <div className="formmmm-fix p-3 text-start">
                    <h4 className="color-yellow mt-2 dpib lt-sp">STUDENT</h4>
                    <input onChange={searchFuncStudent}  type="text" className="f-r my-2 input-note" placeholder="input ..."/>
                    <div className="border-content mt-1 p-2 ">
                        <div className="text-start manage-scroll px-2 ">

                            {
                                //loop here
                            }
                            {
                                filterSearchStudent.map((result, key) => {
                                    if (result.level == 0) {
                                        return (

                                            <div className="mt-3">
                                                <h5 className="dpb color-yellow lt-sp">{result.code}</h5>
                                                <p className="dpib color-white mb-1 lt-sp">{result.firstname}</p>
                                                <Link to={`/fixmanagement/${result.user_id}`} className="dpib upload-btn f-r color-white" type="button">
                                                    <span className="spann">
                                                        fix
                                                    </span>
                                                </Link> 
                                                <hr class="mt-2 mb-0"/>
                                            </div>


                                        )
                                    }
                                })
                            }
                            

                            
                            
                            


                        </div>
                    </div>
                </div>
            </div>

            

        

        </div>
    )
        

}

export default Management

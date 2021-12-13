import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from 'react-icons/ri';
import Createsubject from './subject/Createsubject';
import Editsubject from './subject/Editsubject';
import ReactDOM from "react-dom";


const Subject = () => {
    const [subjects, setSubjects] = useState([])
    
    const [fixid , setFixId] = useState("")

    const [switches , setSwitches] = useState(0)
    

    useEffect(() => {
        Axios.get('http://localhost:8000/subjects').then((response) => {
            setSubjects(response.data)
            // setFilterSearchTA(response.data)
            setFilterSearchAns(response.data)
        })
        
    }, [])
    
    const RefreshData = () => {
        Axios.get('http://localhost:8000/subjects').then((response) => {
            setSubjects(response.data)
            // setFilterSearchTA(response.data)
            setFilterSearchAns(response.data)
        })
        
    }

 
    
    /*
    const [filterSearchTA, setFilterSearchTA] = useState([])
    const searchFuncTA = async (e) => {
        
        const wording = e.target.value
        const newFilter = users.filter((value) => {
            
            return value.code.toLowerCase().includes(wording.toLowerCase())
        })
        setFilterSearchTA(newFilter)
        
    }
*/
    const [filterSearchAns, setFilterSearchAns] = useState([])
    const searchFuncAns = async (e) => {
        
        const wording = e.target.value
        const newFilter = subjects.filter((value) => {
            
            return value.subject_code.toLowerCase().includes(wording.toLowerCase())
        })
        setFilterSearchAns(newFilter)
        
    }

    

    

    
    
    console.log(fixid)
    return (
        
            <div className="container-fluid flex-container">
                {   switches == 0 ? < Createsubject  RefreshData={RefreshData} /> : < Editsubject RefreshData={RefreshData} fixid={fixid} setSwitches={setSwitches} /> }
                
                <div className=" my-4 dpib mx-2">
                    <div className="formmmm-fix p-3 text-start">
                        <h4 className="color-yellow mt-2 dpib lt-sp">SUBJECT LIST</h4>
                        <input onChange={searchFuncAns}  type="text" className="f-r my-2 input-note" placeholder="input ..."/>
                        <div className="border-content mt-1 p-2 ">
                            <div className="text-start manage-scroll px-2 ">

                                {
                                    //loop here
                                }
                                {
                                 filterSearchAns.map((result, key) => {
                                            var xxx
                                                if (result.subject_code.length > 15) {
                                                    xxx = "..."
                                                }
                                        return (

                                            <div className="mt-3" key={key}>
                                                <h5 className="dpib color-yellow lt-sp">{result.subject_code.substring(20,0)}{xxx}</h5>
                                                
                                                <div 
                                                onClick={() => {
                                                    setSwitches(1)
                                                    setFixId(result.subject_id)
                                                    
                                                }}
                                                className="dpib upload-btn f-r color-white" type="button">
                                                    <span className="spann">
                                                        fix
                                                    </span>
                                                </div> 
                                                
                                                <hr className="mt-2 mb-0"/>
                                            </div>


                                        )
                                        
                                    })
                                }
                                

                            
                            
                            


                            </div>
                        </div>
                    </div>
                </div> 

            </div>
        
    )
        

}

export default Subject

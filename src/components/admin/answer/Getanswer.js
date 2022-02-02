import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { FaPaste } from 'react-icons/fa';

import ReactDOM from "react-dom";


const Getanswer = ({valuex}) => {
    const [answers, setAnswers] = useState([])
    const [status, setStatus] = useState([])
    
    
    const [fixid , setFixId] = useState("")

    const [switches , setSwitches] = useState(0)

    useEffect(() => {
        Axios.get('http://localhost:8000/getallans').then((response) => {
            setAnswers(response.data)
            // setFilterSearchTA(response.data)
            setFilterSearchAns(response.data)
        })
        
    }, [])
    
    const RefreshData = () => {
        Axios.get('http://localhost:8000/getallans').then((response) => {
            setAnswers(response.data)
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
        const newFilter = answers.filter((value) => {
            
            return value.answer_title.toLowerCase().includes(wording.toLowerCase())
        })
        setFilterSearchAns(newFilter)
        
    }

    

    
    // var valuex = []
    
    
   
    return (
        
            <div className="">
                
                
                <div  className=" my-4 dpib " >
                    <div style={{width: 300, height: 'auto'}} className="formmmm-fix p-3 text-start">
                        <p className="color-yellow mt-2 dpib lt-sp">ANSWER LIST</p>
                        <input onChange={searchFuncAns}  type="text" className="my-0 input-note" placeholder="input ..."/>
                        <div className="border-content mt-3 p-2 ">
                            <div className="text-start manage-scroll px-2 ">

                                {
                                    //loop here
                                }
                                {
                                 filterSearchAns.map((result, key) => {
                                            var xxx
                                                if (result.answer_title.length > 10) {
                                                    xxx = "..."
                                                }
                                        return (

                                            <div className="mt-3" key={key}>
                                                <h6 className="dpib color-yellow lt-sp">{result.answer_title.substring(10,0)}{xxx}</h6>
                                                
                                                <div id={key} 
                                                onClick={() => {
                                                    
                                                    if (document.getElementById(`${key}`) != null) {
                                                        
                                                        var d = document.getElementById(`${key}`)
                                                        
                                                        if(d.style.backgroundColor == 'green'){
                                                            d.style.backgroundColor = ''
                                                            

                                                        }else{
                                                            d.style.backgroundColor = 'green'
                                                            //do here
                                                            valuex.push(result.answer_id)
    

                                                        }
                                                        console.log(result.answer_detail)
                                                    }
    

                                                }}
                                                className="dpib upload-btn f-r color-white" type="button">
                                                    < FaPaste />
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

export default Getanswer

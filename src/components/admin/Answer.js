import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from 'react-icons/ri';
import Createanswer from './answer/Createanswer';
import Editanswer from './answer/Editanswer';
import ReactDOM from "react-dom";

const Answer = () => {
    const [answers, setAnswers] = useState([])

    const [fixdetail , setFixdetail] = useState("")
    const [fixtitle , setFixtitle] = useState("")
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

    

    const EditAns = () => {

        try {
            
            Axios.post('http://localhost:8000/editans', {
                        answer_detail : fixdetail,
                        answer_title : fixtitle,
                        answer_id : fixid,

                    })

        } catch (err) {

        }
        alert("Success");
        RefreshData();
        console.log("5")
    }

    
    
    console.log(fixid)
    return (
        
            <div className="container-fluid flex-container">
                
                {   switches == 0 ? < Createanswer  RefreshData={RefreshData} /> : < Editanswer RefreshData={RefreshData} fixid={fixid} setSwitches={setSwitches} /> }
                
                <div className=" my-4 dpib mx-2">
                    <div className="formmmm-fix p-3 text-start">
                        <h4 className="color-yellow mt-2 dpib lt-sp">ANSWER LIST</h4>
                        <input onChange={searchFuncAns}  type="text" className="f-r my-2 input-note" placeholder="input ..."/>
                        <div className="border-content mt-1 p-2 ">
                            <div className="text-start manage-scroll px-2 ">

                                {
                                    //loop here
                                }
                                {
                                 filterSearchAns.map((result, key) => {
                                            var xxx
                                                if (result.answer_title.length > 15) {
                                                    xxx = "..."
                                                }
                                        return (

                                            <div className="mt-3" key={key}>
                                                <h5 className="dpib color-yellow lt-sp">{result.answer_title.substring(20,0)}{xxx}</h5>
                                                
                                                <div 
                                                onClick={() => {
                                                    
                                                    setFixId(result.answer_id)
                                                    setSwitches(1)
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

export default Answer

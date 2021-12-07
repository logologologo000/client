import React from 'react'
import { useState, useEffect, memo} from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from 'react-icons/ri';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Answer from '../Answer';
import ReactDOM from "react-dom";




const Editanswer = ({RefreshData, fixid , setSwitches}) => {

    const [fixdetail , setFixdetail] = useState("")
    const [fixtitle , setFixtitle] = useState("")
    const [id , setId] = useState("")
    
    

        

    
    useEffect(() => {

        
        setId(fixid)
        Axios.get(`http://localhost:8000/getans/${fixid}`).then((response) => {
            console.log(response.data)
            setFixdetail(response.data[0].answer_detail)
            setFixtitle(response.data[0].answer_title)
        })
        
    }, [fixid])
    
    

    const EditAns = () => {

        try {
            
            Axios.post('http://localhost:8000/editans', {
                        answer_detail : fixdetail,
                        answer_title : fixtitle,
                        answer_id : id,

                    }).then((result) => {
                        if (result.status != 200) {
                            alert(result.data);
                        } else {
                            
                            alert("Success");

        
                        }
                    })

        } catch (err) {

        }
        
        
        
    }


    const DeleteAns = async () => {

        try {
            
            await Axios.get(`http://localhost:8000/deleteans/${fixid}`).then((result) => {
                if (result.status != 200) {
                    alert(result.data);
                } else {
                    setFixdetail('')
                    setFixtitle('')
                    alert("Success");

                }
            })

        } catch (err) {

        }
        setSwitches(0)
        
    }

    
    
        return (
            <div>
                <div className=" my-4 dpib mx-2">
                <div className="formmmm-fix p-3">
                    <h4 className="color-yellow m-2 dpib lt-sp ">EDIT ANSWER</h4>
                    
                    <div  type="button" className="delete-btn dpib f-r mx-2"
                        onClick={() => {
                            DeleteAns()
                            RefreshData();
                        }}
                        >
                            <h5 className="mt-1 pb-1 color-white">< RiDeleteBin5Fill /></h5>
                        </div>
                    <div className="p-3 mb-5" style={{height:270}}>  
                        <label className="d-block">title</label>
                        <input type="text" className="input-note d-block my-2"
                            onChange={ (e) => {
                                setFixtitle(e.target.value)
                            }}
                            value={fixtitle}
                        />
                        <label className="d-block">description</label>
                        <textarea   
                        onChange={(e) => {
                            setFixdetail(e.target.value)
                        }}
                        value={fixdetail}
                        className="d-block input-note-area-100 my-3"></textarea>
                        
                    </div>
                    <div className="d-block text-center pt-3">
                        <div type="button" className="direct-btn mt-5 mx-3 f-r"
                        onClick={() => {
                            if (window.confirm(
                                `You need to Login again for refresh cookies                                          Are you sure you want to edit`
                            )) {
                                EditAns()
                                RefreshData();
                            }
                        }}
                        >
                            <h5 className="mt-1 pb-1">< RiSave2Fill /></h5>
                        </div>
                        <div type="button" className="direct-btn mx-3 mt-5 f-l"
                        onClick={() => {
                            setSwitches(0)
                        }}
                        >
                            <h5 className="mt-1 pb-1">< BsFillBackspaceFill /></h5>
                        </div>
                    </div>
                    
                    

                </div>
            </div>
            </div>
        )

    

    
}

export default memo(Editanswer)

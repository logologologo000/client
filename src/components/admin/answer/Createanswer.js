import React from 'react'
import { useState, useEffect , memo } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from 'react-icons/ri';
import { MdLibraryAdd } from 'react-icons/md';
import Answer from '../Answer';




const Createanswer = ({RefreshData}) => {

    const [detail, setDetail] = useState('')
    const [title, setTitle] = useState('')

    const SaveAns = () => {

        try {
            
            Axios.post('http://localhost:8000/createans', {
                        detail : detail,
                        title : title

                    }).then((result) => {
                        if (result.status != 200) {
                           alert(result.data) 
                        } else {
                           alert("Success"); 
                        }

                        
                    })

        } catch (err) {

        }
        
        
        setTitle('');
        setDetail('');
    }
    
        return (
            <div>
                <div className=" my-4 dpib mx-2">
                <div className="formmmm-fix p-3">
                    <h4 className="color-yellow m-2 dpib lt-sp ">CREATE ANSWER</h4>
                    <h4 className="color-white dpib">< MdLibraryAdd /></h4>
                    <div className="p-3 mb-5" style={{height:270}}>  
                        <label className="d-block">title</label>
                        <input type="text" className="input-note d-block my-2"
                            onChange={ (e) => {
                                setTitle(e.target.value)
                            }}
                            value={title}
                        />
                        <label className="d-block">description</label>
                        <textarea   
                        onChange={(e) => {
                            setDetail(e.target.value)
                        }}
                        value={detail}
                        className="d-block input-note-area-100 my-3"></textarea>
                        
                    </div>
                    <div className="d-block text-center pt-3">
                        <div type="button" className="direct-btn mt-5"
                        onClick={() => {
                            if (window.confirm(
                                `You need to Login again for refresh cookies                                          Are you sure you want to edit`
                            )) {
                                SaveAns()
                                RefreshData()
                            }
                        }}
                        >
                            <h5 className="mt-1 pb-1" >< RiSave2Fill /></h5>
                        </div>
                    </div>
                    

                </div>
            </div>
            </div>
        )

    

    
}

export default memo(Createanswer)
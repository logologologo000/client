import { React, useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { dbContext } from '../Signin'
import '../css/User.css'


const Notice = () => {
    const history = useHistory()
    const [notice, setNotice] = useState([])
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [img, setImg] = useState("")
    

    useEffect(() => {
        document.getElementById('idcol1').style.display = 'none'
        Axios.get('http://localhost:8000/getallnotices').then((response) => {
            setNotice(response.data)
           
        })
    }, [])

    const View = (key) => {
        
        document.getElementById('idcol1').style.display = 'block'
        setImg(notice[key].img)
        setTitle(notice[key].title)
        setDetail(notice[key].detail)
    }
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {
                        //  List
                    }
                    <div className="col-10 col-sm-7 col-md-4 mt-4  m-auto">
                        <div className="formmmm p-4 tac">
                            <div className="h5 lt-sp color-yellow tests">NOTICE</div>


                            <div className="list-scroll-full p-3 border-content mt-3" >
                                {
                                    //loop here
                                }

                                {
                                    notice.map((res, key) => {
                                        return (
                                            <div key={key}>
                                                <div className="">
                                                    <div>
                                                        <h6 className="color-yellow dpib f-l">{res.title}</h6>
                                                        <div className="dpib f-r">

                                                            <div
                                                                type="button"
                                                                onClick={() => {
                                                                    
                                                                    View(key)
                                                                }}
                                                                className="bt-class lt-sp "

                                                            >
                                                                <p className="pin">view</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <br />
                                                    <br />

                                                    <hr />


                                                </div>
                                            </div>
                                        )
                                    })
                                }







                            </div>
                        </div>
                    </div>
                    {
                        //  Detail
                    }
                    <div className="col-12 col-sm-12 col-md-8  m-auto my-4" >
                        <div className=" p-3  formmmmre">

                            <div class="py-1 detail-requ" id="idcol1">

                                <h4 className="color-white lt-sp">{title}</h4>
                                <div className="white-content p-3 mt-4" >

                                    <div className="dpib">
                                        <img className="imgu resize" src={`/uploads/notice/${img}`} />
                                    </div>
                                    <div className="mx-3 dpib desc ">
                                        <h5 className="">
                                            Description
                                        </h5>
                                        <div className="desc-scroll">
                                            <p className="desc-text">{detail}</p>
                                        </div>

                                    </div>



                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Notice
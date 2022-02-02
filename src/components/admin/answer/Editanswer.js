import React from 'react'
import { useState, useEffect, memo } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from 'react-icons/ri';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Answer from '../Answer';
import ReactDOM from "react-dom";




const Editanswer = ({ RefreshData, fixid, setSwitches }) => {

    const [fixdetail, setFixdetail] = useState("")
    const [fixtitle, setFixtitle] = useState("")
    const [id, setId] = useState("")
    const [img, setImg] = useState('')
    const [file, setFile] = useState('')





    useEffect(() => {


        setId(fixid)
        Axios.get(`http://localhost:8000/getans/${fixid}`).then((response) => {
            console.log(response.data)
            setFixdetail(response.data[0].answer_detail)
            setFixtitle(response.data[0].answer_title)
            setImg(response.data[0].img)

        })

    }, [fixid])



    const EditAns = async () => {

        try {

            if (file == '') {
                console.log('no img')
                Axios.post('http://localhost:8000/editans', {
                answer_detail: fixdetail,
                answer_title: fixtitle,
                answer_id: id,

            }).then((result) => {
                if (result.status != 200) {
                    alert(result.data);
                } else {

                    alert("Success");


                }
            })

            } else {
                console.log(' img')

                const formData = new FormData()
                formData.append('file', file)
                formData.append('title', fixtitle)
                formData.append('detail', fixdetail)
                formData.append('answer_id', id)
                console.log(id)
                console.log(fixdetail)
                console.log(fixtitle)
                console.log(file)

                try {
                    const res = await Axios.post(`http://localhost:8000/editansimg`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
    
                } catch (err) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(err)
                    }
                }
                window.alert('Edit Success')
                // history.push("/")
            }

            

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

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    return (
        <div>
            <div id="myModal" class="modal">
                <span
                    onClick={() => {

                        modal.style.display = "none";

                    }}
                    class="close">&times;</span>
                <img class="modal-content" id="img01" />
                <div id="caption"></div>
            </div>
            
            <div className=" my-4 dpib mx-2">
                <div className="formmmm-fix p-3">
                    <h4 className="color-yellow m-2 dpib lt-sp ">EDIT ANSWER</h4>

                    <div type="button" className="delete-btn dpib f-r mx-2"
                        onClick={() => {
                            DeleteAns()
                            RefreshData();
                        }}
                    >
                        <h5 className="mt-1 pb-1 color-white">< RiDeleteBin5Fill /></h5>
                    </div>
                    <div className="p-3 mb-5" style={{ height: 270 }}>
                        <label className="d-block">title</label>
                        <input type="text" className="input-note d-inline-block my-2"
                            onChange={(e) => {
                                setFixtitle(e.target.value)
                            }}
                            value={fixtitle}
                        />
                        <input
                            onChange={(e) => {
                                setFile(e.target.files[0])
                            }}
                            type="file" className=" upload-btn color-white custom-file-input f-r " />
                        <div
                            onClick={() => {
                                modal.style.display = "block";
                                modalImg.src = `/uploads/${img}`;
                                captionText.innerHTML = img;
                            }}
                            className=" color-white dpib f-r "
                            type="button"
                        >
                            <span className="">view</span>
                        </div>
                        
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

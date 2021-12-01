import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'
import { TiArrowRightThick } from 'react-icons/ti';
import { TiArrowLeftThick } from 'react-icons/ti';
import { RiDeleteBin5Fill } from 'react-icons/ri';


const EditNo = () => {

    const { notice_id } = useParams()
    let history = useHistory();
    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    const [detail, setDetail] = useState('')
    const [img, setImg] = useState('')
    const [notice, setNotice] = useState('')



    useEffect(() => {
        Axios.get(`http://localhost:8000/getnotice/${notice_id}`).then((response) => {
            setTitle(response.data[0].title)
            setDetail(response.data[0].detail)
            setImg(response.data[0].img)
        })
    }, [])



    const onSubmit = async (e) => {

        e.preventDefault()

        if (file == '') {
            await Axios.post(`http://localhost:8000/editnotice/${notice_id}`, {
                title: title,
                detail: detail
            }).then((response) => {
                window.alert(response.data.msg)
                history.push("/")
            })
        } else {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)
            formData.append('detail', detail)


            try {
                const res = await Axios.post(`http://localhost:8000/editnoticeimg/${notice_id}`, formData, {
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
            history.push("/")
        }
    }

    const deleteNotice = () => {
        Axios.delete(`http://localhost:8000/deletenotice/${notice_id}`).then((response) => {
            window.alert(response.data)
        })
    }

    // Get the modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    return (
        <div className="container">

            <div id="myModal" class="modal">
                <span
                    onClick={() => {

                        modal.style.display = "none";

                    }}
                    class="close">&times;</span>
                <img class="modal-content" id="img01" />
                <div id="caption"></div>
            </div>


            <div className="formmmm my-3 text-center p-4 col-10  col-md-10 mx-auto">
                <h4 className="color-yellow lt-sp dpib">EDIT NOTICE</h4>
                <div
                    type="button"
                    onClick={() => {
                        deleteNotice()
                    }}
                    className="delete-btn dpib f-r">
                    <span className="">< RiDeleteBin5Fill /></span>
                </div>
                <div className="border-content mt-3 p-3">
                    <div className="p-3">
                        <label className="f-l">title</label>
                        <div className="cus-up ">
                            <input
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                value={title} type="text" className="input-note col-md-7 " />
                        </div>
                        <hr class="mt-2 mb-0" />
                    </div>

                    <div className="p-3">
                        <label className="f-l">image</label>
                        <div className="cus-up">
                            <div 
                                onClick={() => {
                                    modal.style.display = "block";
                                    modalImg.src = `/uploads/notice/${img}`;
                                    captionText.innerHTML = img;
                                }}
                                className=" color-white dpib "
                                type="button"
                               >
                                    <span className="">view</span>
                                </div>
                            <input
                                onChange={(e) => {
                                    setFile(e.target.files[0])
                                }}
                                type="file" className=" upload-btn color-white  custom-file-input" />


                        </div>
                        <hr class="mt-2 mb-0" />
                    </div>

                    <div className="p-3">
                        <label className="d-block">description</label>
                        <textarea value={detail} type="text" className="d-block input-note-area my-3">
                        </textarea>
                        <hr class="mt-2 mb-0" />
                    </div>

                    <div className="d-block mt-2 px-3">
                        <div onClick={() => {
                            history.push("/");
                        }} type="button" className="direct-btn f-l">
                            <h5 className="my-0 pb-1">< TiArrowLeftThick /></h5>
                        </div>
                        <div onClick={onSubmit} type="button" className="direct-btn f-r">
                        <h5 className="my-0 pb-1">< TiArrowRightThick /></h5>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default EditNo;
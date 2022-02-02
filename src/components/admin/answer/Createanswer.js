import React from "react";
import { useState, useEffect, memo } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import Answer from "../Answer";

const Createanswer = ({ RefreshData }) => {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})


  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
    
    }

  const SaveAns = async (e) => {
    // e.preventDefault()
    try {
      
      
            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)
            formData.append('detail', detail)
            console.log(file)
            console.log(title)
            console.log(detail)

            try {
              const res = await Axios.post('http://localhost:8000/createans', formData , {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                      
                  }
              })
              
              const { fileName, filePath } = res.data
              setUploadedFile(fileName, filePath)
              window.alert('Create Success')
              // history.push("/");
          } catch (err) {
              if (err) {
                  window.alert(err.response.data.msg)
                  console.log(err.response.data.msg)
              } else {
                  console.log(err.response.data.msg)
              }
          }



      // Axios.post("http://localhost:8000/createans", {
      //   detail: detail,
      //   title: title,
      // }).then((result) => {
      //   if (result.status != 200) {
      //     alert(result.data);
      //   } else {
      //     alert("Success");
      //   }
      // });



    } catch (err) { }

    setTitle("");
    setDetail("");
  };

  return (
    <div>
      <div className=" my-4 dpib mx-2">
        <div className="formmmm-fix p-3">
          <h4 className="color-yellow m-2 dpib lt-sp ">CREATE ANSWER</h4>
          <h4 className="color-white dpib">
            <MdLibraryAdd />
          </h4>
          <div className="p-3 mb-5" style={{ height: 270 }}>
            <label className="d-block">title</label>
            <input
              type="text"
              className="input-note dpib block my-2"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />


           
            <input
              onChange={(e) => {
                setFile(e.target.files[0])
              }}
              type="file" className=" upload-btn color-white custom-file-input f-r " />




            <label className="d-block">description</label>
            <textarea
              onChange={(e) => {
                setDetail(e.target.value);
              }}
              value={detail}
              className="d-block input-note-area-100 my-3"
            ></textarea>
          </div>
          <div className="d-block text-center pt-3">
            <div
              type="button"
              className="direct-btn mt-5"
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to create`
                  )
                ) {
                  SaveAns();
                  RefreshData();
                }
              }}
            >
              <h5 className="mt-1 pb-1">
                <RiSave2Fill />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Createanswer);

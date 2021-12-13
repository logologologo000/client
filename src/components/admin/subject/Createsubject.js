import React from "react";
import { useState, useEffect, memo } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { RiSave2Fill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import Answer from "../Answer";

const Createsubject = ({ RefreshData }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const SaveAns = () => {
    try {
      Axios.post("http://localhost:8000/createsub", {
        subject_code: code,
        subject_name: name,
      }).then((result) => {
        if (result.status != 200) {
          alert(result.data);
        } else {
          alert("Success");
        }
      });
    } catch (err) {}

    setCode("");
    setName("");
  };

  return (
    <div>
      <div className=" my-4 dpib mx-2">
        <div className="formmmm-fix p-3">
          <h4 className="color-yellow m-2 dpib lt-sp ">CREATE SUBJECT</h4>
          <h4 className="color-white dpib">
            <MdLibraryAdd />
          </h4>
          <div className="p-3 mb-5" style={{ height: 270 }}>
            <label className="d-block">subject code</label>
            <input
              style={{ width:440}}
              type="text"
              className="input-note d-block my-2"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              value={code}
            />
            <label className="d-block mt-5">subject name</label>
            <textarea
              style={{height:200}}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="d-block input-note-area-100 mt-2"
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

export default memo(Createsubject);

import React from "react";
import "../css/Admin.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { dbContext } from "../Signin";
import { AiFillAlert } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { useHistory, useParams } from "react-router-dom";


function Moreno() {
    let history = useHistory();

    const [notices, setNotices] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/getallnotices").then((response) => {
            setNotices(response.data);
        });
    }, []);



    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto mt-4">
            <div className="formmmm tac p-4">
                <div>
                    <h5 className="color-yellow lt-sp mx-3 ">CREATE NOTICE</h5>

                    <Link to="/createnotice" type="button" className="ic-add mt-4">
                        +
                    </Link>
                    <Link to="/" type="button" className="ic-add mt-4 mx-2">
                        ...
                    </Link>
                    
                </div>
                <div className="create-notice-border mt-3">
                    <div className="list-scroll p-2">
                        {
                            //loop here
                        }
                        {notices.map((response, key) => {
                            var xxx;
                            if (response.title.length > 15) {
                                xxx = "...";
                            }
                            return (
                                <div
                                    key={key}
                                    id={key}
                                    onMouseEnter={() => {
                                        console.log(response.img);
                                        // document.getElementById(key).style =
                                        // `
                                        // background-image : url(/uploads/notice/${response.img});
                                        // `
                                        // document.getElementById(key).classList = 'resize'
                                    }}
                                    className="dpib m-3"
                                >
                                    <div className="border-content-s dpib mt-4">
                                        <Link to={`/editnotice/${response.notice_id}`}>
                                            <p className="color-white m-auto p-4">
                                                {response.title.substring(15, 0)}
                                                {xxx}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Moreno;
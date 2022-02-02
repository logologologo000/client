import React from "react";
import "../css/Admin.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { dbContext } from "../Signin";
import { AiFillAlert } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { HiOutlineSearchCircle } from "react-icons/hi";

function Admin() {
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);
  const [notices, setNotices] = useState([]);
  const [ta, setTa] = useState(0);
  const [status0, setStatus0] = useState(0);
  const [status1, setStatus1] = useState(0);
  const [status2, setStatus2] = useState(0);

  useEffect(() => {
    // get status 0
    Axios.get("http://localhost:8000/getreqsstatus0").then((response) => {
      setStatus0(response.data.length);
      setFilterSearch(response.data);
    });
    // get status 1
    Axios.get("http://localhost:8000/getreqsstatus1").then((response) => {
      setStatus1(response.data.length);
    });
    // get status 2
    Axios.get("http://localhost:8000/getreqsstatus2").then((response) => {
      setStatus2(response.data.length);
    });

    // get reqs with status 0 and 1
    Axios.get("http://localhost:8000/getreqsstatus").then((response) => {
      setRequests(response.data);
      
    });

    //get all users
    Axios.get("http://localhost:8000/getallusers").then((response) => {
      
      response.data.map((result , key) => {
        console.log(result.level)
      })
      setUsers(response.data);
    });

    //get TA
    Axios.get("http://localhost:8000/getallta").then((response) => {
      setTa(response.data.length);
    });

    // get notices
    Axios.get("http://localhost:8000/getallnotices").then((response) => {
      setNotices(response.data);
    });
  }, []);

  const GetNew = () => {
    // get reqs with status 0
    Axios.get("http://localhost:8000/getreqsstatus0").then((response) => {
      
      setFilterSearch(response.data);
    });
  }

  const GetProcess = () => {
    // get reqs with status 1
    Axios.get("http://localhost:8000/getreqsstatus1").then((response) => {
      
      setFilterSearch(response.data);
    });
  }

  const GetSuccess = () => {
    // get reqs with status 2
    Axios.get("http://localhost:8000/getreqsstatus2").then((response) => {
      
      setFilterSearch(response.data);
    });
  }

  const [filterSearch, setFilterSearch] = useState([]);
  
  const searchFunc = async (e) => {
    const wording = e.target.value;
    const newFilter = requests.filter((value) => {
      return value.code.toLowerCase().includes(wording.toLowerCase());
    });
    setFilterSearch(newFilter);
  };

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          {
            //Status
          }
          <div className="col-lg-6 col-md-5 col-sm-8 col-8 m-auto mt-4">
            <div className="formmmm p-4">
              <h6 className="color-white mb-3 lt-sp ">STATUS</h6>
              <div className="border-content">
                <div className="container">
                  <table className="color-white lt-sp m-auto mt-4 text-start">
                    <tr>
                      <td>
                        <h3 className="dpib">
                          <AiFillAlert />
                        </h3>{" "}
                        requests
                      </td>
                      <td className="text-end">{requests.length}</td>
                    </tr>
                    <tr>
                      <td className="">
                      <p onClick={GetNew} type="button" className="dot-red my-0  dpib"></p><div className="mx-2 dpib">( new )</div>

                      </td>
                      <td className="text-end">{status0}</td>
                    </tr>
                    <tr>
                      <td>
                      <p onClick={GetProcess} type="button" className="dot-yellow my-0  dpib"></p><div className="mx-2 dpib">( processing )</div>

                      </td>
                      <td className="text-end">{status1}</td>
                    </tr>
                    <tr>
                      <td>
                      <p onClick={GetSuccess} type="button" className="dot-green my-0  dpib" ></p><div className="mx-2 dpib">( success )</div>

                      </td>
                      <td className="text-end">{status2}</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="dpib">
                          <HiUsers />
                        </h3>{" "}
                        users
                      </td>
                      <td className="text-end">{users.length}</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="dpib">
                          <MdAssignment />
                        </h3>{" "}
                        notices
                      </td>
                      <td className="text-end">{notices.length}</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="dpib">
                          <FaUserGraduate />
                        </h3>{" "}
                        TA{" "}
                      </td>
                      <td className="text-end">{ta}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {
            //Create Notice
          }
          
          {
            //List req
          }
          <div className="col-lg-6 col-md-8 col-sm-8 col-8 m-auto my-4 ">
            <div className="formmmm p-4">
              <div className="text-center">
                <h4 className="color-white d-block mx-2 ">
                  <HiOutlineSearchCircle />
                </h4>
                <input
                  onChange={searchFunc}
                  type="text"
                  className="form-control searches m-auto dpib"
                  placeholder="input someting..."
                />
              </div>

              <div className="border-content mt-3" style={{ height: 370 }}>
                <div className="list-scroll p-3">
                  {
                    //loop here
                  }

                  {filterSearch.map((response, key) => {
                    var xxx;
                    if (response.title.length > 15) {
                      xxx = "...";
                    }
                    console.log(response)
                    return (
                      <div key={key}>
                        <div className="p-2 tac">
                          <h6 className="color-yellow lt-sp dpb  d-inline-block">
                            {response.title.substring(15, 0)}
                            {xxx}
                            
                          </h6>
                          
                          
                          {/* <p className="color-white lt-sp d-inline-block mx-2">{response.code}</p> */}
                          <div className="dpib m-0 f-r">
                            <Link
                              to={`/fixreq/${response.request_id}`}
                              type="button"
                              className=" bt-class lt-sp m-0"
                              /*
                                                            onMouseOver={() => {
                                                                document.getElementById(`${response.request_id}`).style.display = 'block' 
                                                                
                                                               
                                                            }} 
                                                            */
                              onClick={() => {
                                if(response.status != 2) {

                                  //set req status
                                Axios.post(
                                  "http://localhost:8000/setstatusreq",
                                  {
                                    request_id: response.request_id,
                                    status: 1,
                                  }
                                );
                              }}
                                }
                                
                              /*
                                                            onMouseOut={() => {
                                                                document.getElementById(`${response.request_id}`).style.display = 'none' 
                                                            }}
                                                            */
                            >
                              <p className="m-0">
                                <GoEye />
                              </p>
                            </Link>
                          </div>
                          <br />
                          <div class="collapse" id={response.request_id}>
                            <div class="py-1 dpib">
                              <p className="color-white">{response.detail}</p>
                            </div>
                          </div>

                          <hr class="my-0" />
                        </div>
                      </div>
                    );
                  })}

                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

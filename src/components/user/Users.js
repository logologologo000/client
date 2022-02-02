import React from "react";
import "../css/User.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { dbContext } from "../Signin";

import { useContext } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";


function Users() {
  const db = useContext(dbContext);

  let history = useHistory();
  const [requests, setRequests] = useState([]);
  const [viewId, setViewId] = useState("");

  useEffect(() => {
    document.getElementById("idcol1").style.display = "none";
    document.getElementById("idcol2").style.display = "none";
    document.getElementById("idcol").style.display = "none";
    console.log(
      "This only happens ONCE.  But it happens AFTER the initial render."
    );
    try {
      Axios.post("http://localhost:8000/getreqsob", {
        user_id: db[0].user_id,
      }).then((result) => {
        setRequests(result.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const [request, setRequest] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [notice, setNotice] = useState("");
  const [img, setImg] = useState("");
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [answerwall, setAnswerwall] = useState([]);

  const getDetail = () => {
    document.getElementById("idcol1").style.display = "block";
    document.getElementById("idcol2").style.display = "block";
    document.getElementById("idcol").style.display = "block";

    Axios.post("http://localhost:8000/getreq", {
      request_id: viewId,
    }).then((result) => {
      setRequest(result.data);
      setTitle(result.data.title);
      setDetail(result.data.detail);
      setImg(result.data.img);
      setNotice(result.data.notice);

    });

    SetDateTime()
    console.log(viewId)
    Axios.post("http://localhost:8000/getanswall", {
      request_id: viewId,
    }).then((response) => {
      setAnswerwall(response.data)
    })

  };
  console.log(answerwall)
  const SetDateTime = () => {

    Axios.get(`http://localhost:8000/createdatereq/${viewId}`).then((response) => {

      setTime(response.data.time)
      setDate(response.data.date)
      console.log(response.data.time)
      // var to = new Date();
      // var date = `${to.getDate()}/${to.getMonth()}/${to.getFullYear()}`;
      // var time = `${to.getHours()}:${to.getMinutes()}`
      // var datetime = date + " " + time
      // var savedatetime = `${to.getFullYear()}${to.getMonth()}${to.getDate()}${to.getHours()}${to.getMinutes()}${to.getSeconds()}`
      // to.setHours(to.getHours()+7)
      // console.log(to)
    })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {
          //  List
        }
        <div className="col-10 col-sm-7 col-md-5 mt-4  m-auto">
          <div className="formmmmuser p-4 tac">
            <div className="h5 lt-sp color-yellow tests">MY REQUESTS</div>
            <Link to="/createreq" type="button" className="ic-add mt-4">
              +
            </Link>
            <br />
            <div className="list-scroll-cus p-3 border-content mt-4">
              {
                //loop here
              }

              {requests.map((result, key) => {
                var xxx;
                if (result.title.length >= 20) {
                  xxx = "...";
                }
                return (
                  <div key={key}>
                    <div className="">
                      <div>
                        <h6 className="color-yellow dpib mt-3">
                          {result.status == 0 ? <p type="buttom" className="dot-red d-inline-block my-0 mx-2"></p> : (result.status == 1 ? <p type="buttom" className="dot-yellow d-inline-block my-0 mx-2"></p> : <p type="buttom" className="dot-green d-inline-block my-0 mx-2"></p>)}
                          {result.title.substring(20, 0)}
                          {xxx}
                        </h6>
                        <div className="dpib f-r">
                          
                          {result.status == 2 ? <div></div> : <div  className="bt-class-fix lt-sp my-2 mx-2 ">
                            <Link to={`/fixreq/${result.request_id}`}>
                              <h4>
                                <RiEdit2Fill />
                              </h4>
                            </Link>
                          </div>}

                          <div
                            type="button"
                            data-bs-toggle=""
                            data-bs-target=""
                            className="bt-class-fix lt-sp my-2"
                            onMouseEnter={() => {
                              setViewId(result.request_id);

                            }}
                            onClick={() => {
                              console.log(result.status)
                              getDetail();
                            }}
                          >
                            <h4 className="">
                              <AiFillEye />
                            </h4>
                          </div>
                        </div>
                      </div>

                      <hr />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {
          //  Detail
        }
        <div className="col-12 col-sm-12 col-md-7  m-auto my-4">
          <div className=" p-3  formmmm" id="idcol1">
            <div class="p-3 detail-requ" >
              <h4 className="color-yellow lt-sp dpib mx-3">{title}</h4>
              <h6 className="dpib color-white f-r">
                < BiTimeFive />
                {"  " + date + "  "}
                {time}
              </h6>
              <div className="white-content p-3 mt-4 py-5">
                <div className="dpib">
                  <img className="imgu resize" src={`/uploads/${img}`} />
                </div>
                <div className="mx-3 dpib desc ">
                  <h5 className="">detail</h5>
                  <div className="desc-scroll">
                    <p className="desc-text">
                      <div style={{}}>{detail}</div>
                    </p>
                  </div>
                </div>
              </div>
              <br />


            </div>
          </div>

        </div>

        <div className="col-12 col-sm-12 col-md-6  m-auto my-4" id="idcol2">
          <div className=" p-3  formmmm " >
            <div class="p-3 detail-requ" >


              <br />

              <div className="white-content p-3 note" style={{ height: 350 }}>
                <h5 className="">Description</h5>
                <div className="note-scroll">
                  <p>{notice}</p>
                </div>

              </div>
            </div>
          </div>

        </div>



        <div className="col-12 col-sm-12 col-md-9  m-auto my-4" id="idcol">

          {/* loop ans here */}

          {
            answerwall.map((response, key) => {

              return (
                <div className=" p-3  formmmm mb-5">
                  <div class="p-3 detail-requ" >
                    <h4 className="color-yellow lt-sp dpib mx-3">{response.answer_title}</h4>

                    <div className="white-content p-3 mt-4 py-5">
                      <div className="dpib">
                        <img className="imgu resize" src={`/uploads/${response.img}`} />
                      </div>
                      <div className="mx-3 dpib desc ">
                        <h5 className="">answer</h5>
                        <div className="desc-scroll">
                          <p className="desc-text">
                            <div style={{width : 350}}>{response.answer_detail}</div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />


                  </div>
                </div>
              )
            })
          }




        </div>

      </div>

    </div>
  );
}

export default Users;

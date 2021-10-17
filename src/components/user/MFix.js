import { React, useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { dbContext } from '../Signin'


const MFixed = () => {

    const [current, setCurrent] = useState([]) // cuurent DAta
    let history = useHistory();
    const db = useContext(dbContext)
    const [username, setUsername] = useState(db[0].username)
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState(db[0].firstname)
    const [lastname, setLastname] = useState(db[0].lastname)
    const [email, setEmail] = useState(db[0].email)
    const [subject, setSubject] = useState(db[0].subject)
    const [code, setCode] = useState(db[0].code)

    useEffect(() => {
        Axios.get(`http://localhost:8000/getuser/${db[0].user_id}`).then((response) => {
            setCurrent(response.data)
        })
    }, [])

    const sendServer = () => {

        const send = Axios.post(`http://localhost:8000/edituser/${db[0].user_id}`, {
            old_username: db[0].username,
            old_code: db[0].code,
            old_email: db[0].email,
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            subject: subject,
            code: code
        })
            .then((response) => {
                
                window.alert(`${response.data}, Signin for come back to this page !!!`)      
                // history.push("/");

            }).catch((error) => {
                window.alert(error)
            })
    }

    // console.log({
    //     username,
    //     firstname,
    //     lastname,
    //     email,
    //     subject,
    //     code
    // })



    const ResetPassword = (x) => {

        if (x) {

            console.log(current[0].password)
            console.log(x)

            Axios.put(`http://localhost:8000/resetpassword/${db[0].user_id}`, {
                old_password: current[0].password,
                new_password: x
            }).then((response) => {
                console.log(current[0].password)
            })


        }



    }


    return (
        <div className="">
            <div className="container-fluid formmmm-fix mt-4 p-3">
                <div className="my-2">
                    <h6 className="color-yellow lt-sp dpib mx-3" >{code}</h6>

                </div>
                <div className="border-content-fixm mt-2 p-3">
                    <div className="">
                        <p className="lt-sp color-white dpib">username</p>
                        <input type="text" className="f-r input-op mx-3"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <hr className="my-1" />
                    </div>
                    <div className="">
                        <p className="lt-sp color-white dpib">password</p>
                        <p className="lt-sp  dpib">..</p>
                        <div
                            onClick={() => {

                                const inputp = window.prompt("New Password")

                                ResetPassword(inputp)

                            }}
                            type="button" className="direct-btn  lt-sp mx-5"  >reset</div>
                        <hr className="my-1" />
                    </div>
                    <div className="">
                        <p className="lt-sp color-white dpib">first-name</p>
                        <input type="text" className="f-r input-op mx-3"
                            value={firstname}
                            onChange={(e) => {
                                setFirstname(e.target.value)
                            }}
                        />
                        <hr className="my-1" />
                    </div>
                    <div className="">
                        <p className="lt-sp color-white dpib">last-name</p>
                        <input type="text" className="f-r input-op mx-3"
                            value={lastname}
                            onChange={(e) => {
                                setLastname(e.target.value)
                            }}
                        />
                        <hr className="my-1" />
                    </div>

                    <div className="">
                        <p className="lt-sp color-white dpib">e-mail</p>
                        <input type="email" className="f-r input-op mx-3"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <hr className="my-1" />
                    </div>
                    <div className="">
                        <p className="lt-sp color-white dpib">Code</p>
                        <input type="email" className="f-r input-op mx-3"
                            value={code}
                            onChange={(e) => {
                                setCode(e.target.value)
                            }}
                        />
                        <hr className="my-1" />
                    </div>
                    <div className="">
                        <p className="lt-sp color-white dpib">subject</p>
                        <p className="lt-sp  dpib">.....</p>
                        <select
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                            className=" dpib mx-5" aria-label="Default select example">
                            <option defaultValue value={username}  >{subject}</option>
                            <option value="COM 1404 sec 2">COM 1404 sec 2</option>
                            <option value="COM 2540 sec 1">COM 2540 sec 1</option>
                            <option value="COM 3303 sec 11">COM 3303 sec 11</option>
                        </select>

                    </div>





                </div>
                <div className="my-3">
                    <div
                        onClick={() => {
                            history.push("/");
                        }}
                        type="button" type="button" className="direct-btn f-l">
                        <span className="spann">back</span>
                    </div>
                    <div type="button" className="direct-btn f-r"
                        onClick={() => {
                            if (window.confirm(
                                `You need to Login again for refresh cookies                                           Are you sure you want to edit`
                            )) {
                                sendServer()
                            }
                        }}
                    >
                        <span className="spann">confirm</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MFixed
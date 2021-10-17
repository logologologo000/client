import React from 'react'
import '../css/Admin.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from "react-router-dom";
import { dbContext } from '../Signin'

const MFixed = () => {
    const history = useHistory()
    const {user_id} = useParams()
    const [user, setUser] = useState('')
    const [code, setCode] = useState('')
    const [old_code, setOld_code] = useState('')
    const [username, setUsername] = useState('')
    const [old_username, setOld_username] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [old_email, setOld_email] = useState('')
    const [subject, setSubject] = useState('')
    const [level, setLevel] = useState('')
    const [css, setCss] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:8000/getuser/${user_id}`).then((result) => {
            setUser(result.data[0])
            setUsername(result.data[0].username)
            setCode(result.data[0].code)
            setFirstname(result.data[0].firstname)
            setLastname(result.data[0].lastname)
            setEmail(result.data[0].email)
            setSubject(result.data[0].subject)
            setOld_username(result.data[0].username)
            setOld_email(result.data[0].email)
            setOld_code(result.data[0].email)
            setLevel(result.data[0].level)
            if (result.data[0].level == 0) {
                setCss('dpib f-r ta-disable-btn mx-2')
            } else {
                setCss('dpib f-r ta-active-btn mx-2')
            }
        })

        
    }, [])

    const refresh = () => {
        Axios.get(`http://localhost:8000/getuser/${user_id}`).then((result) => {
            setUser(result.data[0])
            setUsername(result.data[0].username)
            setCode(result.data[0].code)
            setFirstname(result.data[0].firstname)
            setLastname(result.data[0].lastname)
            setEmail(result.data[0].email)
            setSubject(result.data[0].subject)
            setOld_username(result.data[0].username)
            setOld_email(result.data[0].email)
            setOld_code(result.data[0].email)
            setLevel(result.data[0].level)
            
        })
    }

    const sendServer = () => {

        const send = Axios.post(`http://localhost:8000/edituser/${user_id}`, {
            old_username: old_username,
            old_email: old_email,
            old_code: old_code,
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
                window.location.reload();
                
            })
    }

    const ResetPassword = (x) => {

        if (x) {

            Axios.put(`http://localhost:8000/resetpassword/${user_id}`, {
                old_password: user.password,
                new_password: x
            }).then((response) => {
                window.alert('Success')
            })

        }

    }

    const deleteUser = () => {
        Axios.delete(`http://localhost:8000/deleteuser/${user_id}`).then((response) => {
            history.push("/");
            window.alert(response.data)

        })
    }

    const setSetTa = () => {
        

        // level == 1 ? level = 0 : level = 1
        console.log(level)
        let x
        if (level == 1) {
            x = 0 
            setCss('dpib f-r ta-disable-btn mx-2')

        } else if (level == 0) {
            x = 1 
            setCss('dpib f-r ta-active-btn mx-2')
        } else {

        }
        Axios.put('http://localhost:8000/setuserlevel', {
            user_id : user_id,
            level : x
        }).then((response) => {
            setTimeout(refresh(), 5000)

        })
        
    }
    
    

    
    return ( 

        <div className="">
            <div className="container-fluid formmmm-fix mt-4 p-3">
                <div className="my-2">
                    <h6 className="color-yellow lt-sp dpib mx-3" >{code}</h6>
                    <div onClick={deleteUser} type="button" className="dpib f-r delete-btn">
                        <span className="">delete</span>
                    </div>
                    <div onClick={setSetTa} type="button" className={css}>
                        <span className="">TA</span>
                    </div>

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
                            history.push("/management");
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
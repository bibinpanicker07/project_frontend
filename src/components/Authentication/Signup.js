import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react";
import axios from "axios";
import validator from 'validator'


function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')

    const validateEmail = (e) => {
        

        if (validator.isEmail(user.email)) {
          
            setEmailError('')

        } else {
            setEmailError('Enter valid Email!')
        }

        if (validator.isStrongPassword(user.password)) {
          
            setPassError('')
        } else {
            setPassError('Enter strong password!')
        }

        if(validator.isEmail(user.email)&&validator.isStrongPassword(user.password)){
            postUser(e);
        }

    }
    function postUser(e) {
        e.preventDefault();
        console.log(user);
        axios
            .post("http://localhost:8080/user/signup", user)
            .then((response) => {
                console.log(response.data);
                alert("Account created successfully!!!");
                navigate("/");

            }).catch((error) => {
                alert("Enter your details correctly")
            });
    }

    return (
        <div className='body'>
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-left  align-items-center h-100 ">
                    <div class="row d-flex justify-content-left">
                        <div class="col-lg-8">

                            <div className=" text-left mt-1 mb-1 pb-1">
                                <h1 className="mt-1 mb-5 pb-1">
                                    <p className='welcome'>Create New Account</p></h1>
                                <form >

                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <label className='label'>
                                                <div className="text-left mt-1 mb-1 pb-1"> First Name</div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={user.firstName}
                                                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                                        className="input" /></div>
                                            </label></div>
                                        <div class="col-md-6 mb-4">
                                            <label className='label'><div className="text-left mt-1 mb-1 pb-1 "> Last Name</div>
                                                <div className="form-outline mb-4  ">
                                                    <input
                                                        type="text"
                                                        value={user.lastName}
                                                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                                        className="input " /></div>
                                            </label>
                                        </div>
                                    </div>



                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <label className='label'><div className="text-left mt-1 mb-1 pb-1"> Email Id</div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        value={user.email}
                                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                        className="input" /></div>
                                            </label>
                                            <div className='error'>{emailError}</div></div>
                                        <div class="col-md-6 mb-4">
                                            <label className='label'><div className="text-left mt-1 mb-1 pb-1"> Password</div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        value={user.password}
                                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                        className="input" /></div>
                                            </label>
                                            <div className='error'>{passError}</div></div></div>
                                    <button className="sbtn" onClick={(e) => {
                                        validateEmail(e);
                                    }} >SignUp</button >
                                </form>
                                <h5>Already has an account?

                                    <Link to="/">Login</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
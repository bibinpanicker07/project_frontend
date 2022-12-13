import background from "../img/signup.jpg";
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
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        marginTop: '0px',
        fontSize: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <div className='form'>
                <h1 className='welcome'>Create New Account</h1>
                <form >
                    <label className='label'>First Name<br></br>
                        <input
                            type="text"
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            className="input" />
                    </label><br></br>
                    <label className='label'>Last Name<br></br>
                        <input
                            type="text"
                            value={user.lastName}
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            className="input" />
                    </label><br></br>
                    <label className='label'>Email Id<br></br>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="input" />
                    </label><br></br>
                    <span className='error'>{emailError}</span><br></br>
                    <label className='label'>Password<br></br>
                        <input
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="input" />
                    </label><br></br>
                    <span className='error'>{passError}</span><br></br>
                    <button className="sbtn" onClick={(e) => {
                        validateEmail(e);
                    }} >SignUp</button >
                </form>
                <h5>Already has an account?

                    <Link to="/">Login</Link>
                </h5>
            </div>
        </div>
    );
}

export default SignUp;
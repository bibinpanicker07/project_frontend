
import styled from 'styled-components';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import background from "../img/signup.jpg";
import './signup.css';
import {Link,useNavigate} from "react-router-dom"

let themeDefault = ''



function Login() {
    const navigate=useNavigate();
    const [user, setUser] = useState({email: "",
    password: "",});

    const SButton = styled.button`
    background-color: #314402;
    color: white;
    font-size: 20px;
    flex-wrap: wrap;
    padding: 15px 145px;
    border-radius: 5px;
    margin: 4.2rem 0px;
    cursor: pointer;`

    function postUser(e) {
        e.preventDefault();
        console.log(user);
        axios
          .post("http://localhost:8080/user/signin", user)
          .then((response) => {
            console.log(response.data);
            themeDefault = response.data.token;
            navigate("/AllCategories");

          }).catch((error)=>{
            alert("Incorrect Email Id or password ")
           });
      }
     
      const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'0px',
        fontSize:'30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
 

    return  (
        <div style={myStyle}>
            <div className='form'>
                <h1 className='welcome'>WELCOME!!</h1>
            <form >
                <label className='label'>Email<br></br>
                    <input 
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({...user,email:e.target.value})}
                        className="input"    />
                </label><br></br>
                <label className='label'>Password<br></br>
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user,password:e.target.value})}
                  className="input"  />
                </label><br></br>
                
                <SButton onClick={(e)=> {postUser(e);
                }}>Login</SButton >
                
                 </form>

                 
                <h5>Don't have an account? 

                <Link to ="/signup">SignUp</Link>
                </h5>
                </div>
            </div>
    


    );}




export default Login;

export { themeDefault }
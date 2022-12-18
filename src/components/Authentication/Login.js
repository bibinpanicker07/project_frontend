
import styled from 'styled-components';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import background from "../img/signup.jpg";
import './signup.css';
import './login.css';
import {Link,useNavigate} from "react-router-dom"
import {isAuth} from '../layout/navigation/Navigation';

let themeDefault = ''
function Login() {
    const navigate=useNavigate();
    const [user, setUser] = useState({email: "",
    password: "",});
   

    function postUser(e) {
        e.preventDefault();
        console.log(user);
        axios
          .post("http://localhost:8080/user/signin", user)
          .then((response) => {
            console.log(response.data);
            themeDefault = response.data.token;
            navigate("/AllCategories");
            //isAuth= true;
            localStorage.setItem('token-info', JSON.stringify(user));
            
          }).catch((error)=>{
            if(status===true){
            alert("Incorrect Email Id or password ")
            }
           });
      }
     
      const [emailError, setEmailError] = useState('')
      const [passError, setPassError] = useState('')
  var status=false;
      const validateEmail = (e) => {
  
          if (user.email.length!=0) {
              setEmailError('')
  
          } else {
              setEmailError('Enter your Email!')
          }
  
          if (user.password.length!=0) {
            
              setPassError('')
          } else {
              setPassError('Enter your password!')
          }
  
          if((user.email.length!=0)&&(user.email.length!=0)){
            status=true;
              postUser(e);
          }
  
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
                <span className='error'>{emailError}</span><br></br>
                <label className='label'>Password<br></br>
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user,password:e.target.value})}
                  className="input"  />
                </label><br></br>
                <span className='error'>{passError}</span><br></br>
                
                <button className='sbtn' onClick={(e)=> {validateEmail(e);
                }}>Login</button >
                
                 </form>

                 
                <h5>Don't have an account? 

                <Link to ="/signup">SignUp</Link>
                </h5>
                </div>
            </div>
    


    );}




export default Login;
//export {logout};

export { themeDefault }
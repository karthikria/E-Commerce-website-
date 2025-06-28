import React, { useState } from 'react'
import './LoginSignup.css'
export const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] =useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler =(e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
     console.log("login function executed",formData);
     let responseData;
     await fetch('http//localhost:4000/login',{
       method :'POST',
       header :{
         Accept :'application/formData',
         'Content-Type' : 'application/json',
 
       },
       body : JSON.stringify(formData),
 
     }) .then((response)=>{
       response.json()
     }).then((data)=>responseData=data)
 
     if(responseData.success){
       localStorage.setItem('auth-token',responseData.token);
       window.location.replace("/");
     }
     else{
       alert(responseData.errors)
     }
     
  }
  const signup = async()=>{
    console.log("signup function executed",formData);
    let responseData;
    await fetch('http//localhost:4000/signup',{
      method :'POST',
      header :{
        Accept :'application/formData',
        'Content-Type' : 'application/json',

      },
      body : JSON.stringify(formData),

    }) .then((response)=>{
      response.json()
    }).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          
        {state ==="sign up"?  <input name='username ' value={formData.username} onChange={changeHandler()} type="text" placeholder='YOUR NAME' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler()} type="email" placeholder='email address' />
          <input name='password' value={formData.password} onChange={changeHandler()} type="password" placeholder='password' />

        </div>
        <button onClick={(()=>{state==="login"?login():signup()})}>Continue</button>
        {state ==="Sign up" ?  <p className="loginsignup-login">
          Already have an account <span onClick={()=>{setState("Login")}}>Login here</span>
        </p>: <p className="loginsignup-login">
          create an account <span onClick={()=>{setState("Sign up")}}>click here</span>
        </p>}
      
       
        <div className="loginsignup-agree">
         <input type="checkbox" name='' id='' />
         <p>by continuing i agree to the term of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup
import React from "react";
import './stylesComp/Form.css'


const Form = ()=>{
    return (
      <div className="reg">
        <div className="form">
          <h1>Login Form</h1>
          
        <input placeholder="login"></input>
        <input type="password" placeholder="password"></input>

        </div>
    
      </div> 
    )
}

export default Form;
import React from "react";
import myImg from './img/smile.jpg'
import './user.css'


const User = ({photo, name})=>{

    return (
        <div className='User'>
            <div className="avatar">
                <img src={photo} alt="" className="photo" />
                <h1>{name}</h1>
                
            
            </div>
            
            <button>
                <img src={myImg} alt=""className="button"/>
            </button>
            

        </div>

    )
}



export default User;
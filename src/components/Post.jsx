import React from "react";
import './post.css'

import User from './User';
import Content from "./Content";

const Post = ({ava, userName})=>{

    return (
        <div className='post'>
            
            
            <User photo={ava} name = {userName}/>
            <Content/>
            <h1>fvgdb</h1>


        </div>

    )
}

export default Post;
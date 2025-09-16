import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
 let { id } = useParams();
    return (
        <div style={{padding:"20px"}}>
    <h1>Blog Post</h1>
    <p>This is the blog post about {id}</p>
        
    </div>
  );
}
export default BlogPost;
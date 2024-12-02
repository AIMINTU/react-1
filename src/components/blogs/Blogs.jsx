import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog/Blog";


const Blogs = ({handleclick,handleMin}) => {
    console.log(handleMin)
    const [blogs,setBlogs]=useState()
    
    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="2xl font-bold">BLOGS</h2>
            <div>
                {
                    blogs?.map(blog=><Blog key={blog.unique_id} blog={blog} handleclick={handleclick} handleMin={handleMin}></Blog>)

                }
            </div>
        </div>
    );
};

export default Blogs;
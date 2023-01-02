import React, { useState, useEffect } from 'react';
import '../css/blog.css'
const Blogsidebar = ({ catagoryFiletering, display }) => {
  const [catagory, setCatagory] = useState("")
  const [recent, setRecent] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/api/blogs/recent").then(resp => resp.json())
        .then(
            result => {
                setRecent(result)
            }
        )
  },[])
  return (
    <div class="col-lg-3 sidebar">
      <div class="wrapper recentPostCont">
        <div id="sidebar">
          <div class="recentbox widget">
            <h4>Recent Posts</h4>
            {
              recent.map((recentPost)=>{
                return(
                  <div class="thumbnailbox recent_item_container">
                  <div className="recentthumbcontainer">
                    <img class="card-img-left recentimagemodification" src={recentPost.blogImage} alt="Card" />
                  </div>
                  <div class="card-body">
                    <p class="card-title">{recentPost.blogTitle}</p>
                  </div>
                </div>
                )
              })
            }
            
          
          
          </div>
        </div>
      </div>

      <div class="sidebar-header widget" style={{display:display}}>
        <h4>Catagories</h4>
        <ul class="catlinks">
          <li onClick={() => {catagoryFiletering("all")}}>All</li>
          <li onClick={() => {catagoryFiletering("webdevelopers") }}>Web-Developer</li>
          <li onClick={() => {catagoryFiletering("marketing") }}>Marketing</li>
          <li onClick={() => {catagoryFiletering("tech") }}>Technology</li>
        </ul>
      </div>
    </div>
  );
}

export default Blogsidebar;

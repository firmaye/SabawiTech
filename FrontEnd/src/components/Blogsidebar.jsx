import React, { useState, useEffect } from 'react';
import '../css/blog.css'
const Blogsidebar = ({ catagoryFiletering, display }) => {
  const [catagory, setCatagory] = useState("")
  const [recent, setRecent] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/recent`).then(resp => resp.json())
      .then(
        result => {
          setRecent(result)
        }
      )
  }, [])
  return (
    <div className="col-lg-3 sidebar">
      <div className="wrapper recentPostCont">
        <div id="sidebar">
          <div className="recentbox widget">
            <h4>Recent Posts</h4>
            {
              recent.map((recentPost) => {
                return (
                  <div className="thumbnailbox recent_item_container">
                    <div className="recentthumbcontainer">
                      <img className="card-img-left recentimagemodification" src={recentPost.blogImage} alt="Card" />
                    </div>
                    <div className="card-body">
                      <p className="card-title">{recentPost.blogTitle}</p>
                    </div>
                  </div>
                )
              })
            }



          </div>
        </div>
      </div>

      <div className="sidebar-header widget" style={{ display: display }}>
        <h4>Catagories</h4>
        <ul className="catlinks">
          <li onClick={() => { catagoryFiletering("all") }}>All</li>
          <li onClick={() => { catagoryFiletering("webdevelopers") }}>Web-Developer</li>
          <li onClick={() => { catagoryFiletering("marketing") }}>Marketing</li>
          <li onClick={() => { catagoryFiletering("tech") }}>Technology</li>
        </ul>
      </div>
    </div>
  );
}

export default Blogsidebar;

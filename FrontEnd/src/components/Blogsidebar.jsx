import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/blog.css'
const Blogsidebar = ({ catagoryFiletering, display }) => {
  const navigate = useNavigate();
  const [catagory, setCatagory] = useState("")
  const [search, setSearch] = useState("")
  const [recent, setRecent] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/api/blogs/recent").then(resp => resp.json())
      .then(
        result => {
          setRecent(result)
          console.log(result);
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
                      <img className="card-img-left recentimagemodification"src={`https://napi.sabawitech.com${recentPost.blogImage}`} alt="Card" />
                    </div>
                    <div className="recentcard-body card-body">
                      <a href={`blogdetails/${recentPost._id}`} className="card-title">{recentPost.blogTitle.substring(0,24)+". . ."}</a>
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

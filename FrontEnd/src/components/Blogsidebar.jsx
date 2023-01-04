import React, { useState } from 'react';
import '../css/blog.css'
const Blogsidebar = ({ catagoryFiletering }) => {
  const [catagory, setCatagory] = useState("")
  return (
    <div className="col-lg-3 sidebar">
      <div className="wrapper recentPostCont">
        <div id="sidebar">
          <div className="recentbox widget">
            <h4>Recent Posts</h4>
            <div className="thumbnailbox recent_item_container">
              <div className="recentthumbcontainer">
                <img className="card-img-left recentimagemodification" src="./Images/post1.jpg" alt="Card" />
              </div>
              <div className="card-body">
                <p className="card-title">What are the advantages of being a freelancer?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-header widget">
        <h4>Catagories</h4>
        <ul className="catlinks">
          <li onClick={() => { catagoryFiletering("webdevelopment") }}>Web-Developer</li>
          <li onClick={() => { catagoryFiletering("marketing") }}>Marketing</li>
          <li onClick={() => { catagoryFiletering("tech") }}>Technology</li>
        </ul>
      </div>
    </div>
  );
}

export default Blogsidebar;

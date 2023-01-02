import React, { useState, useEffect } from 'react';

import '../css/blog.css';
import data from './jsonapi/data.json'
const Blog = ({ catagory }) => {
  const [blog, setBlog] = useState([]);
  // useEffect(()=>{
  //     setBlog(data.blogdata)
  // }, [])
  // console.log("catagories of a blog", catagory);
  // console.log(data.blogdata)
  let sublist = data.blogdata.filter((elt) => {
    console.log(elt.catagory)
    console.log(catagory)
    if (catagory == "all") {
      return elt
    } else {

      if (elt.catagory == catagory) {
        return elt
      }
    }
  })
  // console.log(sublist)
  return (
    <div className="blogcontainer">
      {sublist.map((blog) => {
        return (
          <div className="col-lg-12 the_excerpt">
            <img className="card-img-top img-responsive blogimage" src={blog.blogImage} alt='' />
            {/* style="margin-top: 55px;" */}
            <div className="card-body the_excerpt_content" >
              <div className="entry-meta">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-user"></i> by <a href="">{blog.author}</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-comment"></i> <a href="">0 Comments</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-tags"></i> <a href="">Interview</a> </li>
                </ul>
              </div>
              <a className="blog_title" href="" rel="bookmark">{blog.blogTitle}</a>
              <p className="card-text">{blog.blogDescription}</p>

              <a className="prolancer-rgb-btn" href={`blogdetails/${blog.id}`}>Read More</a>
            </div>
          </div>
        )
      })}




      <div className="pagination nav-links"><span aria-current="page" className="page-numbers current">1</span>
        <a className="page-numbers" href="">2</a>
        <a className="next page-numbers" href="">Next {'❯'}</a></div>
    </div>
  );
}

export default Blog;

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
    }
    else if (elt.catagory == catagory) {
        return elt
      }
  })
  // console.log(sublist)
  return (
    <div class="blogcontainer">
      {sublist.length == 0 ? 
      <div class="noresultscont">
        <img src="./Images/searchnotfound.png" alt="" />
        <h3>No results found on the section</h3>
        <p>Try again</p>
      </div>: 
      sublist.map((blog) => {
        return (
          <div class="col-lg-12 the_excerpt">
            <img class="card-img-top img-responsive blogimage" src={blog.blogImage} alt='' />
            {/* style="margin-top: 55px;" */}
            <div class="card-body the_excerpt_content" >
              <div class="entry-meta">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <i class="fa fa-user"></i> by <a href="javascript:void(0)">{blog.author}</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="fa fa-comment"></i> <a href="">0 Comments</a>
                  </li>
                </ul>
              </div>
              <a class="blog_title" href={`blogdetails/${blog.id}`} rel="bookmark">{blog.blogTitle}</a>
              <p class="card-text">{blog.blogDescription.substring(0,200)+' . . .'}</p>

              <a class="prolancer-rgb-btn" href={`blogdetails/${blog.id}`}>Read More</a>
            </div>
          </div>
        )
      })}




      <div class="pagination nav-links"><span aria-current="page" class="page-numbers current">1</span>
        <a class="page-numbers" href="">2</a>
        <a class="next page-numbers" href="">Next {'❯'}</a></div>
    </div>
  );
}

export default Blog;

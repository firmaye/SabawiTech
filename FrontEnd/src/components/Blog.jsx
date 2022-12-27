import React, { useState, useEffect } from 'react';

import '../css/blog.css';
import data from './jsonapi/data.json'
const Blog = ({ catagory }) => {
  const [blog, setBlog] = useState([]);
  // useEffect(()=>{
  //     setBlog(data.blogdata)
  // }, [])
  console.log("catagories of a blog", catagory);
  let sublist = data.blogdata.filter((elt) => {
    if (elt.catagory == catagory) {
      return setBlog(blog)
    }
    console.log(elt.catagory, catagory)
  })
  console.log(sublist)
  return (
    <div class="blogcontainer">
      {sublist.map((blog) => {
        return (
          <div class="col-lg-12 the_excerpt">
            <img class="card-img-top img-responsive blogimage" src={blog.blogImage} alt='' />
            {/* style="margin-top: 55px;" */}
            <div class="card-body the_excerpt_content" >
              <div class="entry-meta">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <i class="fa fa-user"></i> by <a href="">{blog.author}</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="fa fa-comment"></i> <a href="">0 Comments</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="fa fa-tags"></i> <a href="">Interview</a> </li>
                </ul>
              </div>
              <a class="blog_title" href="" rel="bookmark">{blog.blogTitle}</a>
              <p class="card-text">{blog.blogDescription}</p>

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

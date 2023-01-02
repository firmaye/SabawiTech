import React, { useState, useEffect } from 'react';

import '../css/blog.css';
import data from './jsonapi/data.json'
const Blog = ({ catagory }) => {
  const [blog, setBlog] = useState([]);
  const [startPage, setStartPage] = useState(1);


  useEffect(() => {
    fetch("http://localhost:8080/api/blogs/").then(res => res.json()).then(result => {
        console.log(result)
        setBlog(result)
    }).catch((error) => { console.log(error) });
}, [])

  // useEffect(async ()=>{
  //   const response = await api.get("/api/blogs");
  //   setBlog(response.data)
  //   console.log(response.data)
  // },[])
  // useEffect(()=>{
  //     setBlog(data.blogdata)
  // }, [])
  let sublist = blog.filter((elt) => {
    if (catagory == "all") {
      return elt
    }
    else if (elt.catagory == catagory) {
        return elt
      }
  })
  const blogPerPage = 3
  const pagination = Math.ceil(sublist.length/blogPerPage);
  const pageNumbers = []
  for(var i=1; i<=pagination; i++){
    pageNumbers.push(i)
  }
  // console.log("pagenumber", pageNumbers)
  var start = (startPage * blogPerPage) - blogPerPage
  var end = startPage * blogPerPage
  const selectedbloglist = sublist.slice(start, end);

  console.log("selected", selectedbloglist)
  for(var i = 0; i <= blogPerPage; i++){
    console.log(i);
  }
  console.log("start page", startPage)
  console.log(blog)

  return (
    <div class="blogcontainer">
      {sublist.length == 0 ? 
      <div class="noresultscont">
        <img src="./Images/searchnotfound.png" alt="" />
        <h3>No results found on the section</h3>
        <p>Try again</p>
      </div>:
      selectedbloglist.map((blog) => {
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

              <a class="prolancer-rgb-btn" href={`blogdetails/${blog._id}`}>Read More</a>
            </div>
          </div>
        )
      })}
      
      <div class="pagination nav-links">
      {pageNumbers.map((page)=>{
        return(
          <div>
            <a class="page-numbers" href="javascript:void(0)" onClick={()=>{setStartPage(page)}}>{page}</a>
            </div>
        )
      })
      }
      {startPage != "" ?
      <a class="next page-numbers" href="javascript:void(0)" 
      onClick={()=>{
        if(startPage<pagination){
          setStartPage(startPage+1)
        }else{
          setStartPage(startPage)
        }
       }}>Next {'❯'}</a>
      :
      ""
      }
      </div>
      </div>
  );
}

export default Blog;

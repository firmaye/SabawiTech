import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import createDOMPurify from 'dompurify'


import '../css/blog.css';
import data from './jsonapi/data.json'
const Blog = ({ catagory }) => {
  const [blog, setBlog] = useState([]);
  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/api/blogs/`).then(res => res.json()).then(result => {
      console.log(result)
      setBlog(result)
    }).catch((error) => { console.log(error) });
  }, [])
  
// const window = (new JSDOM('')).window
const DOMPurify = createDOMPurify(window)


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
    else if (elt.blogCategory == catagory) {
      return elt
    }
  })
  const blogPerPage = 3
  const pagination = Math.ceil(sublist.length / blogPerPage);
  const pageNumbers = []
  for (var i = 1; i <= pagination; i++) {
    pageNumbers.push(i)
  }
  // console.log("pagenumber", pageNumbers)
  var start = (startPage * blogPerPage) - blogPerPage
  var end = startPage * blogPerPage
  const selectedbloglist = sublist.slice(start, end);

  console.log("selected", selectedbloglist)
  for (var i = 0; i <= blogPerPage; i++) {
    console.log(i);
  }
  console.log("start page", startPage)
  console.log(blog)

  return (
    <div className="blogcontainer">
      {sublist.length == 0 ?
        <div className="noresultscont">
          <img src="./Images/searchnotfound.png" alt="" />
          <h3>No results found on the section</h3>
          <p>Try again</p>
        </div> :
        selectedbloglist.map((blog) => {
          return (
            <div className="col-lg-12 the_excerpt">
              <LazyLoadImage effect="blur" className="card-img-top img-responsive blogimage" src={`https://napi.sabawitech.com${blog.blogImage}`} alt='' />
              {/* style="margin-top: 55px;" */}
              {/* {`http://localhost:8080/api/blogs ${blog.blogImage}`} */}
              {/* https://napi.sabawitech.com */}
              <div className="card-body the_excerpt_content" >
                <div className="entry-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-user"></i> by <a href="javascript:void(0)">{blog.author}</a>
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-comment"></i> <a href="">0 Comments</a>
                    </li>
                  </ul>
                </div>
                <a className="blog_title" href={`blogdetails/${blog._id}`} rel="bookmark">{blog.blogTitle}</a>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.blogDescription.substring(0,200) + '. . . ') }} />
                {/* {blog.blogDescription.substring(0, 200) + ' . . .'}</p> */}
                

                <a className="prolancer-rgb-btn" href={`blogdetails/${blog._id}`}>Read More</a>
              </div>
            </div>
          )
        })}

      <div className="pagination nav-links">
        {pageNumbers.map((page) => {
          return (
            <div>
              <a className="page-numbers" href="javascript:void(0)" onClick={() => { setStartPage(page) }}>{page}</a>
            </div>
          )
        })
        }
        {startPage >= 1 ?
          <a className="next page-numbers" href="javascript:void(0)"
            onClick={() => {
              if (startPage < pagination) {
                setStartPage(startPage + 1)
              } else {
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

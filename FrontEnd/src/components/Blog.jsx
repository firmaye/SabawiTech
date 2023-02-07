import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import createDOMPurify from 'dompurify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../css/blog.css';
import data from './jsonapi/data.json'
const Blog = ({ catagory }) => {
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState("")
  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    console.log(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/`)
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/`).then(res => res.json()).then(result => {
      setBlog(result)
    }).catch((error) => {
      console.log(error) 
      });
  }, [])

  // const window = (new JSDOM('')).window
  const DOMPurify = createDOMPurify(window)


  // useEffect(async ()=>{
  //   const response = await api.get("/api/blogs");
  //   setBlog(response.data)
  // },[])
  // useEffect(()=>{
  //     setBlog(data.blogdata)
  // }, [])
  let sublist = blog.filter((elt) => {
    if (search == "") {
      if (catagory == "all") {
        return elt
      }
      else if (elt.blogCategory == catagory) {
        return elt
      }
    } else {
        if (elt.blogTitle.toLowerCase().trim().includes(search.toLowerCase())) {
            return elt
        }
    }
    
  })
  const blogPerPage = 3
  const pagination = Math.ceil(sublist.length / blogPerPage);
  const pageNumbers = []
  for (var i = 1; i <= pagination; i++) {
    pageNumbers.push(i)
  }
  var start = (startPage * blogPerPage) - blogPerPage
  var end = startPage * blogPerPage
  const selectedbloglist = sublist.slice(start, end);

  return (
    <div className="blogcontainer" style={{"margin-bottom": "41px"}}>
      <form className="form-inline mt-4 mb-4">
          <FontAwesomeIcon icon={faSearch} />
          <input onChange={(event) => { setSearch(event.target.value) }} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
      {sublist.length == 0 ?
        <div className="noresultscont">
          <img src="./Images/searchnotfound.png" alt="" />
          <h3>No results found on the section</h3>
          <p>Try again</p>
        </div> :
        selectedbloglist.map((blog) => {
          return (
            <div className="col-lg-12 the_excerpt">
              <LazyLoadImage effect="blur" className="card-img-top img-responsive blogimage" src={`https://napi.sabawitech.com${blog.blogImage}`} alt='image not loading...' />
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
                <p className="card-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.blogDescription.substring(0, 200) + '. . . ') }} />
                {/* {blog.blogDescription.substring(0, 200) + ' . . .'}</p> */}


                <a className="prolancer-rgb-btn" href={`blogdetails/${blog._id}`}>Read More</a>
              </div>
            </div>
          )
        })}

        <div className="opportunity-pagination nav-links">
          {startPage != 1 ?
              <a className="back opportunity-page-numbers"
                  onClick={() => {
                      setStartPage(startPage - 1)

                  }}> Back </a>
              :
              ""
          }
          {pageNumbers.map((page) => {
              return (
                  <div>
                      <a className="opportunity-page-numbers" style={page == startPage ? { background: "#6787FE", color: "white" } : {}} onClick={() => { setStartPage(page) }}>{page}</a>
                  </div>
              )
          })
          }
          {startPage < pageNumbers[pageNumbers.length - 1] ?
              <a className="next opportunity-page-numbers"
                  onClick={() => {
                      if (startPage < pagination) {
                          setStartPage(startPage + 1)
                      } else {
                          setStartPage(startPage)
                      }
                  }}>Next </a>
              :
              ""
          }
      </div>
    </div>
  );
}

export default Blog;

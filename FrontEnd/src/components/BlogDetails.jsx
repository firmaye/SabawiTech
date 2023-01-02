import React, {useEffect, useState} from 'react';
import data from './jsonapi/data.json'
import { useParams } from 'react-router-dom';
import '../css/blog.css'
const BlogDetails = () => {
    const [blog, setblog] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`http://localhost:8080/api/blogs/${params.id}`).then(res => res.json())
        .then(
            result => {
                setblog(result)
            }
        ).catch((error) => { console.log(error) });
        console.log("params", params.id)
    }, []);
    console.log("blog detail page")
    console.log(blog)
    const splittag = (tag)=>{
        tag=String(blog.blogTag)
        var taglist = tag.split(',');
        return taglist
        
    }
    return (
            <div class="detailblogcontianer">
            
            <img class="card-img-top img-responsive blogimage blogimgdetail" src={blog.blogImage} alt="Card image cap"/>
            <div class="card-body the_excerpt_content detail_excerpt_content">
                <div class="entry-meta detail-meta">
                    <ul class="list-inline">
                        <li class="list-inline-item detail_list_inine">
                        <i class="fa fa-user"></i> by <a href="javascript:void(0)">{blog.author}</a>
                        </li>
                        <li class="list-inline-item detail_list_inine">
                        <i class="fa fa-comment"></i> <a href="">0 Comments</a>
                        </li>
                    </ul>
                </div>
              <h3 class="secondTitle">{blog.blogTitle}</h3>
              <p class="card-text">{blog.blogDescription}</p>
            <div class="tags">
                <div>
                {splittag(blog.blogTag).map((tag)=>{
                    return(
                        <a href="javascript:void(0)">{tag}</a>
                    )
                })}
                </div>
                <div class="post-share">
                <div class="social-share list-inline">
                    <ul class="list-inline-item">
                        <li class="list-inline-item"><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href=""><i class="fab fa-pinterest"> </i></a></li>
                        
                    </ul>
                </div>
                </div>
            </div>
            </div>
            {/* <div class="related-posts">
                <h4>Related Post</h4>
                <div class="row">
                <div class="col-md-12 col-xl-4">
                    <div class="single-related-post">
                        <a href="">
                        <img src="../Images/post2.jpg" class="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>

                        <div class="related-post-title">
                            <a href="">Tips for Answering the Top 5 Freelance Job Inte...</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-xl-4">
                    <div class="single-related-post">
                        <a href="">
                        <img src="../Images/post3.jpg" class="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>
                        <div class="related-post-title">
                            <a href="">Hire The Best Freelancers From Around The World</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-xl-4">
                    <div class="single-related-post">
                        <a href="">
                        <img src="../Images/post4.jpg" class="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>
                        <div class="related-post-title">
                            <a href="">Can I make a career out of freelancing?</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div id="comments" class="comments-area">
            <div id="respond" class="comment-respond">
            <h3 id="reply-title" class="comment-reply-title">Leave a Reply 
            <small>
            {/* <a rel="nofollow" id="cancel-comment-reply-link" href="">Cancel reply</a> */}
            </small></h3>
            <p class="must-log-in">You must be <a href="">logged in</a> to post a comment.</p> </div>
        </div>
    </div>         
    );
}

export default BlogDetails;

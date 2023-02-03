import React, { useEffect, useState } from 'react';
import data from './jsonapi/data.json'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams } from 'react-router-dom';
import createDOMPurify from 'dompurify'
import '../css/blog.css'
const BlogDetails = ({ authenticated }) => {
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
    useEffect(()=>{
        const script = document.createElement('script');
        script.async = true;
        document.body.appendChild(script);
        var metypeContainer = document.getElementById("metype-container"),
        page_url = metypeContainer.getAttribute("data-metype-page-url");
        metypeContainer.setAttribute('data-metype-page-url', page_url || window.location.href);
        metypeContainer.setAttribute('data-metype-window-height', window.innerHeight);
        metypeContainer.setAttribute('data-metype-screen-width', window.screen.width);
        talktype(function() {
            talktype.commentWidgetIframe(metypeContainer);
        });
    }, [])
    console.log("blog detail page")
    console.log(blog)
    const splittag = (tag) => {
        tag = String(blog.blogTag)
        var taglist = tag.split(',');
        return taglist

    }
    const DOMPurify = createDOMPurify(window)
    return (
        <div className="detailblogcontianer">

            <img className="card-img-top img-responsive blogimage blogimgdetail blogimgdetailsss" src={`https://napi.sabawitech.com${blog.blogImage}`} alt="Card image cap" />
            <div className="card-body the_excerpt_content detail_excerpt_content">
                <div className="entry-meta detail-meta">
                    <ul className="list-inline">
                        <li className="list-inline-item detail_list_inine">
                            <i className="fa fa-user"></i> by <a href="javascript:void(0)">{blog.author}</a>
                        </li>
                        <li className="list-inline-item detail_list_inine">
                            <i className="fa fa-comment"></i> <a href="">0 Comments</a>
                        </li>
                    </ul>
                </div>
                <h3 className="secondTitle">{blog.blogTitle}</h3>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.blogDescription) }} />
                <div className="tags">
                    <div>
                        {splittag(blog.blogTag).map((tag) => {
                            return (
                                <a href="javascript:void(0)">{tag}</a>
                            )
                        })}
                    </div>
                    <div className="post-share">
                        <div className="social-share list-inline">
                            <ul className="list-inline-item">
                                <li className="list-inline-item"><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fab fa-pinterest"> </i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="related-posts">
                <h4>Related Post</h4>
                <div className="row">
                <div className="col-md-12 col-xl-4">
                    <div className="single-related-post">
                        <a href="">
                        <img src="../Images/post2.jpg" className="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>

                        <div className="related-post-title">
                            <a href="">Tips for Answering the Top 5 Freelance Job Inte...</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-4">
                    <div className="single-related-post">
                        <a href="">
                        <img src="../Images/post3.jpg" className="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>
                        <div className="related-post-title">
                            <a href="">Hire The Best Freelancers From Around The World</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-xl-4">
                    <div className="single-related-post">
                        <a href="">
                        <img src="../Images/post4.jpg" className="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>
                        <div className="related-post-title">
                            <a href="">Can I make a career out of freelancing?</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            <div id="comments" className="comments-area">
                <div id="respond" className="comment-respond">
                    <h3 id="reply-title" className="comment-reply-title">Leave a Reply
                        <small>
                            {/* <a rel="nofollow" id="cancel-comment-reply-link" href="">Cancel reply</a> */}
                        </small></h3>
                    {authenticated ?
                        <div>
                            <div id='metype-container' class='iframe-container' data-metype-account-id='1003342'
                                    data-metype-host='https://www.metype.com/' data-metype-primary-color='#0000ff' data-metype-bg-color='#ffffff'
                                    data-metype-font-color='#4a4a4a'>
                            
                            </div>
                        </div>
                        :
                        <p className="must-log-in">You must be <a href="">logged in</a> to post a comment.</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;

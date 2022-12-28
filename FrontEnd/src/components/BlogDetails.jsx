import React, {useEffect, useState} from 'react';
import data from './jsonapi/data.json'
import { useParams } from 'react-router-dom';
import '../css/blog.css'
const BlogDetails = () => {
    const [blog, setblog] = useState({});
    const params = useParams();
    useEffect(() => {
        const found = data.blogdata.find(element => element.id == params.id);
        setblog(found)
        console.log(blog)
    }, []);
    
    
    return (
            <div classnames="detailblogcontianer">
                
            <img classnames="card-img-top img-responsive blogimage blogimgdetail" src="../Images/post1.jpg" alt="Card image cap"/>
            <div classnames="card-body the_excerpt_content detail_excerpt_content">
                <div classnames="entry-meta detail-meta">
                    <ul classnames="list-inline">
                        <li classnames="list-inline-item detail_list_inine">
                        <i classnames="fa fa-user"></i> by <a href="">{blog.author}</a>
                        </li>
                        <li classnames="list-inline-item detail_list_inine">
                        <i classnames="fa fa-comment"></i> <a href="">0 Comments</a>
                        </li>
                        <li classnames="list-inline-item detail_list_inine">
                        <i classnames="fa fa-tags"></i> <a href="">Interview</a> </li>
                    </ul>
                </div>
              <p classnames="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fugit cupiditate explicabo voluptas hic quia obcaecati, quibusdam eius. Consequuntur a beatae aut atque esse officia voluptatibus molestias amet numquam. Laborum!</p>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely.</p>
              <h3 classnames="secondTitle">So where to from here then?</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. annoying consequences, or one who avoids a pain that produces .</p>
              <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
            <div classnames="tags">
                <div>
                    <a href="">Freelance</a>
                    <a href="">Interview</a>
                    <a href="">Job</a>
                </div>
                <div classnames="post-share">
                <div classnames="social-share list-inline">
                    <ul classnames="list-inline-item">
                        <li classnames="list-inline-item"><a href="https://www.facebook.com/sharer/sharer.php?u=https://themebing.com/wp/prolancer/what-are-the-advantages-of-being-a-freelancer/"><i class="fab fa-facebook-f"></i></a></li>
                        <li classnames="list-inline-item"><a href="https://twitter.com/home?status=https://themebing.com/wp/prolancer/what-are-the-advantages-of-being-a-freelancer/"><i class="fab fa-twitter"></i></a></li>
                        <li classnames="list-inline-item"><a href="https://pinterest.com/pin/create/button/?url=https://themebing.com/wp/prolancer/what-are-the-advantages-of-being-a-freelancer/&amp;media=https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-4.jpg&amp;description=Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]"><i class="fab fa-pinterest"> </i></a></li>
                        <li classnames="list-inline-item"><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://themebing.com/wp/prolancer/what-are-the-advantages-of-being-a-freelancer/"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
              <button classnames="btn btn-primary btnmodify"> {"<<"} Previous Post</button>
            </div>
            <div classnames="related-posts">
                <h4>Related Post</h4>
                <div classnames="row">
                <div classnames="col-md-12 col-xl-4">
                    <div classnames="single-related-post">
                        <a href="">
                        <img src="../Images/post2.jpg" class="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>

                        <div classnames="related-post-title">
                            <a href="">Tips for Answering the Top 5 Freelance Job Inte...</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
                <div classnames="col-md-12 col-xl-4">
                    <div classnames="single-related-post">
                        <a href="">
                        <img src="../Images/post3.jpg" class="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>
                        <div classnames="related-post-title">
                            <a href="">Hire The Best Freelancers From Around The World</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
                <div classnames="col-md-12 col-xl-4">
                    <div classnames="single-related-post">
                        <a href="">
                        <img src="../Images/post4.jpg" class="card-img-top img-responsive relatedpostimg" alt="" decoding="async" loading="lazy"/>
                        </a>
                        <div classnames="related-post-title">
                            <a href="https://themebing.com/wp/prolancer/can-i-make-a-career-out-of-freelancing/">Can I make a career out of freelancing?</a>
                            <span>April 23, 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="comments" classnames="comments-area">
            <div id="respond" classnames="comment-respond">
            <h3 id="reply-title" classnames="comment-reply-title">Leave a Reply 
            <small>
            {/* <a rel="nofollow" id="cancel-comment-reply-link" href="">Cancel reply</a> */}
            </small></h3>
            <p classnames="must-log-in">You must be <a href="">logged in</a> to post a comment.</p> </div>
        </div>
    </div>         
    );
}

export default BlogDetails;

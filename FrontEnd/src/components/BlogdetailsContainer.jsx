import React, { useState, useEffect } from 'react';
import BlogDetails from './BlogDetails';
import Blogsidebar from './Blogsidebar';
import Navbar from './Navbar';
import Header from './Header';
import { useParams } from 'react-router-dom';
const BlogdetailsContainer = ({ name }) => {
    const [blogtitle, setBlogTitle] = useState("")
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${params.id}`).then(res => res.json())
            .then(
                result => {
                    setBlogTitle(result.blogTitle)
                }
            ).catch((error) => {

            });
    }, []);
    const params = useParams()
    return (
        <div>
            <Navbar />
            <Header title={blogtitle} />
            <div className="maincont">
                <div className="container">
                    <div className="container">
                        <div className="row blogmodification">
                            <BlogDetails authenticated={true} />
                            <Blogsidebar display="none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogdetailsContainer;

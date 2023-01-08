import React from 'react';
import BlogDetails from './BlogDetails';
import Blogsidebar from './Blogsidebar';
import Navbar from './Navbar';
import Header from './Header';
import { useParams } from 'react-router-dom';
const BlogdetailsContainer = (props) => {
    const params = useParams()
    return (
        <div>
            <Navbar />
            <Header title="What are the advantages of being a freelancer?" />
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

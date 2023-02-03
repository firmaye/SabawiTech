import React, { useState } from 'react';
import '../css/blog.css'
import Blog from './Blog';
import Blogsidebar from './Blogsidebar';
import Navbar from './Navbar';
import Header from './Header';
const BlogContainer = () => {
    const [catagories, setcatagories] = useState("all");
    const catagoryFiletering = (catagory) => {
        setcatagories(catagory)
    }
    return (
        <div>
            <Navbar />
            <Header title={"Blog"} />
            <div className="maincont">
                <div className="container">
                    <div className="container">
                        <div className="row blogmodification">
                            <Blog catagory={catagories} />
                            <Blogsidebar catagoryFiletering={catagoryFiletering} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogContainer;

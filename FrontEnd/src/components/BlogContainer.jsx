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
    // console.log("catagoryes of container", catagories)
    // // pracitce
    // const [isdivisible, setisdivisible] = useState(0);
    // const [iseven, seteven] = useState(false);
    // const list = [1,2,3,4,5,6,7,8,9,10]
    // let sublist = list.filter((element)=>{
    //     if(isdivisible != 0){
    //         if(element % isdivisible ==0){
    //             return element
    //         }
    //     }else{
    //         return element

    //     }
    // })
    // sublist = sublist.filter((element)=>{
    //     if(iseven == true){
    //         if(element % 2 ==0){
    //             return element
    //         }
    //     }else{
    //         return element

    //     }
    // })
    // console.log(sublist)
    return (
        // <div>
        //     {sublist.map((element)=>{
        //         return(<div>{element}</div>)
        //     })}
        //     <button onClick={()=>{setisdivisible(3)}}>adfas</button>
        //     <button onClick={()=>{seteven(true)}}>adfas</button>
        // </div>
        <div>
            <Navbar />
            <Header title={"Blog"} />
            <div class="maincont">
                <div class="container">
                    <div class="container">
                        <div class="row blogmodification">
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

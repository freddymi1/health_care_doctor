import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import BolgSection from './component/BolgSection'
import ImgSection from './component/ImgSection'
export default function BlogPage(props) {
    return (
        <div className="blog_content">
            <div className="contentBlog">
                <div className="imgBBlock">
                    <ImgSection blog={props.blog} usBl={props.usBl}/>
                </div>
                <div className="blTextSection">
                    <div className="blogSetH">
                        <h2 className="latest_">Latest News:</h2>
                        <button className="viewAllBtn">View all
                            <span><AiOutlineArrowRight className="arr"/></span>
                        </button>
                    </div>
                    <div className="blogS">
                        <BolgSection
                        bl1={props.bl1}
                        bl2={props.bl2}
                        bl3={props.bl3}
                        blog5={props.blog5}
                        blog6={props.blog6}
                        />
                    </div>
                </div>
           </div>
        </div>
    )
}

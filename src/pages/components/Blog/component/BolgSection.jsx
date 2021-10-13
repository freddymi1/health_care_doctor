import React from 'react'
import {FiChevronRight} from 'react-icons/fi'
export default function BolgSection(props) {
    return (
        <div className="mainBlogS">
            <div className="tableSection">
                <img src={props.bl1} alt="" />
                <div className="textSection">
                    <h3>I’m called anti-science I’m just an early...</h3>
                    <button>Read More <FiChevronRight className="ic"/></button>
                </div>
            </div>
            <div className="tableSection">
                <img src={props.bl1} alt="" />
                <div className="textSection">
                    <h3>Burnout and bias? Or medical...</h3>
                    <button>Read More <FiChevronRight className="ic"/></button>
                </div>
            </div>
            <div className="tableSection">
                <img src={props.bl1} alt="" />
                <div className="textSection">
                    <h3>Healthy Living With Graves’ Disease.</h3>
                    <button>Read More <FiChevronRight className="ic"/> </button>
                </div>
            </div>
            <div className="blogSwip">
                <div className="blT">
                    <h3>Coming soon:</h3>
                </div>
                <div className="imgSwip">
                    <img src={props.blog5} alt="blogImg" />
                    <img src={props.blog6} alt="blogImg" />
                </div>
            </div>
        </div>
    )
}

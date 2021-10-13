import React from 'react'
export default function ReviewPage(props) {
    return (
        <div className="review">
               <img src={props.bg} alt="" />
            <div className="_reviewContent">
         
                <div className="review_content">
                    <div className="profile">
                        <img className="userP" src={props.userP} alt="" />
                    </div>
                </div>
                <div className="textReview">
                    <p className="p">
                    Blandit feugiat viverra est tortor commodo, tellus. pellentesque diam, id felis viverra diam. Molestie solli semper ornare dolor augue aucto
                    </p>
                    <div className="pName">
                        <h2>Justin Lubin</h2>
                        <p className="p__">Patient</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

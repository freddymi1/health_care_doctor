import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

export default function ImgSection(props) {
    return (
        <div>
            <img src={props.blog} alt="" />
            <div className="cardBl">
                <div className="cardBLH">
                    <div className="dateBLH">
                        <img src={props.usBl} alt="" />
                        <h2>By Maria Calzoni</h2>
                    </div>
                    <div className="calH">
                        <AiOutlineCalendar className="cal"/>
                        <h2>21/07/2021</h2>
                    </div>
                    <div className="calHc">
                        
                    </div>
                </div>
                <div className="blTitl">
                    <h3>Join me and respectfully fight COVID misinformation.</h3>
                    <p style={{marginBottom:"1rem"}}>
                    Blandit feugiat viverra est tortor commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet.
                    </p>
                    <p>
                    Blandit feugiat viverra est tortor commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </div>
            </div>
        </div>
    )
}

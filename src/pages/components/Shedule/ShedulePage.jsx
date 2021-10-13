import React from 'react'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
export default function ShedulePage(props) {
    return (
        <div className="shedule_content">
           <div className="contentShedule">
                <div className="sheduleTextSection">
                    <h2 className="sheTitle">Schedule</h2>
                        <h3 className="shb_"><span>let's See</span> my schedule time! When i <b>Free.</b></h3>
                    <p className="p">
                        <img src={props.vector} alt="" />
                        <span className="sp">Blandit feugiat viverra est tortor commodo, tellus Neque.</span>
                    </p>
                    <p className="p1_">
                        Diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit.
                    </p>
                    
                    <div className="med">
                        <h2 className="h2_">Medical check-up reviews:</h2>
                        <div className="medicalR">
                            <div className="iconME">
                                <img src={props.link} alt="" />
                                <h2 className="l1_">Heartbeat Rate</h2>
                            </div>
                            <div className="iconME">
                                <img src={props.link} alt="" />
                                <h2 className="l2_">Glucose Tolerance Test</h2>
                            </div>
                            <div className="iconME">
                                <img src={props.link} alt="" />
                                <h2 className="l3_">Blood Pressure</h2>
                            </div>
                            <div className="iconME">
                                <img src={props.link} alt="" />
                                <h2 className="l4_">Blood Sugar Level</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imgBlock">
                    <img src={props.shedule} alt="" />
                    <div className="cardImgShedule">
                        <div className="card_AB_C">
                            <h2 className="t1_">Get an appoinment</h2>
                        </div>
                        <div className="cardABC">
                            <div className="listS">
                                <div className="cr">
                                    <AiOutlineCalendar className="cal"/>
                                    <h3 className="date_">Date:</h3>
                                </div>
                                <h3 className="dateL">25 AUG</h3>
                            </div>
                            <div className="listS">
                                <div className="cr">
                                    <AiOutlineClockCircle className="cal"/>
                                    <h3 className="time_">Time:</h3>
                                </div>
                                <h3 className="dateL">11:30 PM</h3>
                            </div>
                            <div className="listS">
                                <div className="cr">
                                    <IoLocationOutline className="cal"/>
                                    <h3 className="loca_">Location:</h3>
                                </div>
                                <h3 className="dateL">Sen Road</h3>
                            </div>
                        </div>
                        <button className="_sheduleBtn">Select</button>
                    </div>
                </div>
                
           </div>
        </div>
    )
}

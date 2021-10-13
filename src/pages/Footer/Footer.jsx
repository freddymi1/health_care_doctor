import React from 'react'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

export default function Footer(props) {
    return (
        <div className="_footer">
            <div className="footerContainer">
                <div className="_menuFooter">
                    <div className="_logoF">
                        <img src={props.logof} alt="logo footer" />
                    </div>
                    <div className="_adressF">
                        <h4>10 New Town Street, V2 5NW, Newstate, USA.</h4>
                        <div className="contact_">
                            <h4>
                                <FaPhoneAlt className="icF"/>
                                +88(019)24-184 461
                            </h4>
                            <h4 className="emailF">
                                <FaRegEnvelope className="icF"/>
                                shovasatkhira@gmail.com
                            </h4>
                        </div>
                        <div className="socialMedia">
                            <div className="ico1">
                                <img src={props.twit} alt="logo twitter" />
                            </div>
                            <div className="ico1">
                                <img src={props.insta} alt="logo twitter" />
                            </div>
                            <div className="ico1">
                                <img src={props.fb} alt="logo twitter" />
                            </div>
                            <div className="ico1">
                                <img src={props.linked} alt="logo twitter" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_menuFooter">
                    <div className="_logoF">
                        <h2>Menu</h2>
                    </div>
                    <div className="_adressF">
                        <ul>
                            <li>Work</li>
                            <li>About</li>
                            <li>Schedule</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="_menuFooter">
                    <div className="_logoF">
                        <h2>Useful link</h2>
                    </div>
                    <div className="_adressF">
                        <ul>
                            <li>Privecy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Purchasing Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Career</li>
                        </ul>
                    </div>
                </div>
                <div className="_menuFooter">
                    <div className="_logoF">
                        <h2>Contact</h2>
                    </div>
                    <div className="_adressF">
                        <p className="p1">
                        Blandit feugiat viverra est tortor 
                        </p>
                        <p className="p2">
                        commodo, tellus. Neque, pellentesque diam, <br/>id felis viverra diam. Molestie sollicitudin <br/>semper ornare dolor augue 
                        </p>
                        <div className="_inputNews">
                            <input type="text" className="form_input" placeholder="Email address" />
                            <button className="btnSend">
                                <img src={props.send} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_copyR">
                <h3> <span>&copy; </span> Copyright 2021 The LOGO All Rights Reserved.</h3>
            </div>
        </div>
    )
}

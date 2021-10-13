import React from 'react'
import ProgressBar from 'react-animated-progress-bar';
export default function AboutPage(props) {
    return (
        <div className="about_content">
           <div className="contentAbout">
                <div className="imgBlock">
                    <img src={props.about} alt="" />
                    <div className="cardImgAbout">
                        <div className="card_AB_H">
                            <h2 className="titleABH">Dr. Kierra Calzoni</h2>
                            <div className="starAB">
                                <h3 className="rating_">Rating: &nbsp;</h3>
                                <img src={props.star} alt="" />
                            </div>
                        </div>
                        <div className="cardABC">
                            <div className="abcTxt">
                                <p className="p4_">
                                Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec ultricies molestie vel.
                                </p>
                                <div className="contavtS">
                                    <img src={props.phone} alt="" />
                                    <span className="num_">+88 01924 184 461</span>
                                </div>
                            </div>
                            <div className="progressCircle">
                            <ProgressBar 
                                bgColor="#FC756D"
                                width="250" 
                                trackWidth="20" 
                                percentage="90" 
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTextSection">
                    <h2 className="ab_me">ABOUT ME</h2>
                    <h4 className="i_m">I'm Dr. Kierra Calzoni.</h4>
                    <h3 className="actu_">Actually, I love to care <span>Patient.</span></h3>
                    <p className="p1_">
                    <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Tempor proin id aliquet lacinia vulputate non. Rhoncus,
                    </p>
                    <p className="p2_">
                    Blandit feugiat viverra est <span style={{textDecoration:"underline"}}>Suspendisse porta</span> tortor commodo.
                    </p>
                    <p className="p3_">
                    <span style={{textDecoration:"underline"}}>Tempor proin</span> id aliquet lacinia vulputate non. Rhoncus, blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque.
                    </p>
                    <button className="_aboutBtn">Let’s talk</button>
                </div>
           </div>
        </div>
    )
}

import React from 'react'

export default function Homepage(props) {
    return (
        <div className="home__container _container">
            <div className="home_shap">
                <img src={props.shape} alt="" />
            </div>
            {/* <div className="_shadowBlock"></div> */}
            <div className="_shadowBlock2"></div>
            <div className="_shadowBlock1"></div>
            <div className="home__content">
                <div className="data_home">
                    <h1 className="home__subtitle">Stay Strong, Live long.</h1>
                    <h2 className="home__title"><span className="_spanHome">Take care</span> of your body and it will take care of <span className="_spanHome">you</span>.</h2>
                    <p className="_textHome">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,
                    </p>

                    <div className="_flex">
                        <button className="_homeBtn">Get Appointment</button>
                        <button className="_home_Btn">View Profile</button>
                    </div>
                </div>
                <div className="home__img">
                    <img src={props.header} className="header_img" alt="" />
                </div>

                
            </div>
            
        </div>
    )
}

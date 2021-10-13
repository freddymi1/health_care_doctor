import React from 'react'

export default function WorkPage(props) {
    return (
        <div className="_cardContent">
            <div className="card">
                <div className="cardContent">
                    <img src={props.icon1} className="cardImg" alt="" />
                </div>
                <div className="cardTirle">
                    <h3 className="card_titleW">Patient safety</h3>
                    <p>feugiat viverra est suspendis porta tortor commodo</p>
                </div>
            </div>
            <div className="card1">
                <div className="cardContent1">
                    <img src={props.icon2} className="cardImg" alt="" />
                </div>
                <div className="cardTirle">
                    <h3 className="card_titleW">Well Cared</h3>
                    <p>feugiat viverra est suspendis porta tortor commodo</p>
                </div>
            </div>
            <div className="card2">
                <div className="cardContent2">
                    <img src={props.icon3} className="cardImg" alt="" />
                </div>
                <div className="cardTirle">
                    <h3 className="card_titleW">24/7 Service</h3>
                    <p>feugiat viverra est suspendis porta tortor commodo</p>
                </div>
            </div>
            <div className="card3">
                <div className="cardContent3">
                    <img src={props.icon4} className="cardImg" alt="" />
                </div>
                <div className="cardTirle">
                    <h3 className="card_titleW">Online support</h3>
                    <p>feugiat viverra est suspendis porta tortor commodo</p>
                </div>
            </div>
        </div>
    )
}

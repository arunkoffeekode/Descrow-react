import React from 'react'
import "./Work.css";
import man from "../img/man.png";
import decentralized from "../img/decentralized.png";
import community from "../img/community.png";
import fees from "../img/fees.png";

function Work() {
    return (
        <div>
            <section className='work' id="Works">
                <div className='row'>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={man} alt="" />
                            <h3>No middle man</h3>
                            <p>There is no one between you and your money.</p>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={decentralized} alt="" />
                            <h3>100% Decentralized</h3>
                            <p>Fully decentralized and operated by smart contracts.</p>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={community} alt="" />
                            <h3>Community managed</h3>
                            <p>Whenever a dispute arise, the community review and decide the outcome.</p>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={fees} alt="" />
                            <h3>Low fees</h3>
                            <p>The best service for the lowest fees. </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Work
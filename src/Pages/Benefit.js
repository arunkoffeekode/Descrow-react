import React from 'react'
import "./Benefit.css";
function Benefit() {
    return (
        <div>
            <section className='benefit' id="Benefits">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xl-6'>
                            <div className='benefit-left'>
                                <h1>The <span>benefits</span> of using a Decentralized escrow</h1>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xl-6'>
                            <div className='benefit-main'>
                            <div className='benefit-right'>
                                <div className='benefit-box'>
                                    <div className='benefit-title'>Peace of mind</div>
                                    <p>You have the control. We just help you get there.</p>
                                </div>
                            </div>
                            <div className='benefit-right'>
                                <div className='benefit-box'>
                                    <div className='benefit-title'>Fund safety</div>
                                    <p>Have peace of mind with on chain and off chain insurance.</p>
                                </div>
                            </div>
                            <div className='benefit-right'>
                                <div className='benefit-box'>
                                    <div className='benefit-title'>Quick action</div>
                                    <p>Quick transfers</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Benefit
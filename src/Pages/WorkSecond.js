import React from 'react'
import "./WorkSecond.css";
import agriment from "../img/agriment.png";
import deposit from "../img/deposit.png";
import delivery from "../img/delivery.png";
import release from "../img/release.png";
function WorkSecond() {
    return (
        <div>
            <section className='worksecond'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                        <div className='main-title'>
                            <h1>How it works</h1>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={agriment} alt="" />
                            <h3>Agreement</h3>
                            <p>Buyer and seller agree on the terms of the escrow</p>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={deposit} alt="" />
                            <h3>Deposit</h3>
                            <p>Buyer deposit the payment in the Descrow contract </p>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={delivery} alt="" />
                            <h3>Delivery</h3>
                            <p>The seller complete and provide the service</p>
                        </div>
                    </div>
                    <div className='col-xs-3'>
                        <div className='box-r-g'>
                            <img src={release} alt="" />
                            <h3>Release</h3>
                            <p>Once the job is done the buyer will release the payment. </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default WorkSecond
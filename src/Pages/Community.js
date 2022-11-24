import React from 'react'
import "./Community.css";
import seller from "../img/seller.png";
import disput from "../img/disput.png";
function Community() {
    return (
        <div>
            <section className='community'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                        <div className='main-title mb-5'>
                            <h1>Community-driven dispute</h1>
                        </div>
                    </div>
                    <div className='col-xs-6'>
                        <div className='community-r-g'>
                            <h3>Buyer and seller dispute</h3>
                            <p>Buyer and sellers can create a dispute and the community will review the case and vote on the outcome</p>
                            <div className='community-icon'>
                                <img src={seller} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-6'>
                        <div className='community-r-g'>
                            <h3>End of dispute</h3>
                            <p>If the dispute cannot be resolved after the expiration time, the funds are released.</p>
                            <div className='community-icon img-lft'>
                                <img src={disput} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Community
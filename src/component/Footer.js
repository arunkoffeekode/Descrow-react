import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className='col-lg-6'>
                            <div className='row justify-content-center'>
                                <div className="col-lg-5 col-md-3 col-sm-12 col-xl-5">
                                    <div className="footer-links-1">
                                        <div className="logo-section">
                                            <img src="images/footer-logo.png" alt="logo" />
                                        </div>
                                        <h5>Descrow</h5>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xl-3">
                                    <div className="footer-links-1">

                                        <ul>
                                            <li><a href="#">Discord</a></li>
                                            <li><a href="#"> Telegram</a></li>
                                            <li><a href="#"> Twitter</a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xl-3">
                                    <div className="footer-links-1">

                                        <ul>
                                            <li><a href="#">About Us </a></li>
                                            <li><a href="#"> Support</a></li>
                                            <li><a href="#"> Whitepaper</a></li>

                                        </ul>
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

export default Footer
import React from 'react'
import "./EscrowsTable.css"
import Model from './Model'
function EscrowsTable() {
    return (
        <div>
            <section className='escros'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                            <div class="escrow-title">Escrows</div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                            <button type="button" class="escrow-model-btn" data-toggle="modal" data-target="#exampleModalLong">New Escrows</button>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <ul id="myTab1" role="tablist" class="nav nav-tabs nav-pills">
                                <li class="nav-item">
                                    <a id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false" class="nav-link active show">all</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Active-tab" data-toggle="tab" href="#Active" role="tab" aria-controls="Active" aria-selected="true" class="nav-link">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Ended-tab" data-toggle="tab" href="#Ended" role="tab" aria-controls="Ended" aria-selected="true" class="nav-link">Ended</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Dispute-tab" data-toggle="tab" href="#Dispute" role="tab" aria-controls="Dispute" aria-selected="true" class="nav-link">Dispute</a>
                                </li>
                            </ul>

                            <div id="myTab1Content" class="tab-content">
                                <div id="all" role="tabpanel" aria-labelledby="all-tab" class="tab-pane fade active show">
                                    <div className='escros-table-box'>
                                        <div className='table-title'>
                                            <div className='left-title'>
                                                <h3>#0004 - <span>My first escrow contract</span> </h3>
                                            </div>
                                            <div className='right-title'>
                                                <label><i class="fa fa-circle" aria-hidden="true"></i>ACTIVE</label>
                                                <h6>USDC 3056</h6>
                                            </div>
                                        </div>
                                        <div className='escros-details'>
                                            <div className='date'>
                                                <div className='left-date'>
                                                    <span><i class="fa fa-clock-o" aria-hidden="true"></i> 19 Nov 2022</span>
                                                </div>
                                                <div className='right-day'>
                                                    <span>10 days 5 hours</span>
                                                </div>
                                            </div>

                                            <p>This is an example of escrow contract to show how the design would look like</p>
                                            <div className='from'><i class="fa fa-circle-thin" aria-hidden="true"></i> From : <span>0xFC72b32F2f7caFCa4d5d99c031f4B8F9579c18b6</span> </div>
                                            <div className='from'><i class="fa fa-circle-thin" aria-hidden="true"></i> To : <span>0xBbD7d4e49aC3f38e109f7052084184F3C59f3789</span> </div>

                                            <div className='fees'>Fee 0.5%</div>
                                            <div className='attechement'>
                                                <h6>Attachments</h6>
                                                <input class="form-control" type="file" id="formFile" />
                                                <div className='row'>
                                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                                        <p className='vote'>Vote</p>
                                                        <h6 className='vote-details'> No vote</h6>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                                        <p className='vote'>Action</p>
                                                        <h6 className='vote-details'> No Action</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div id="Active" role="tabpanel" aria-labelledby="Active-tab" class="tab-pane fade">
                                    <div class="row">
                                        <div class="col-md-12">

                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>


                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div id="pagination">
                                <div class="pagination-list">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-center">
                                            <a class="page-link" href="#">
                                                <li class="page-item"> Prev </li></a>
                                            <li class="page-item page-link current">1</li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                                            <a class="page-link" href="#">
                                                <li class="page-item">Next </li></a>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Model />
        </div>
    )
}

export default EscrowsTable
import React from 'react'
import "./Model.css";
function Model() {
    return (
        <div>
            <div class="modal fade mt-0" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header1">
                            <h5 class="modal-title" id="exampleModalLongTitle">New escrow</h5>
                        </div>
                        <div class="modal-body1">
                            <form action="">
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Contract title</label>
                                        <input type="text" name="name" class="form-control" id="inputName" placeholder='Contract name' />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Contract description</label>
                                        <textarea type="text" class="form-control" name="Message" id="inputMessage" rows="2" placeholder='Describe your escrow contract'></textarea>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Amount</label>
                                        <input type="text" name="name" class="form-control" id="inputName" placeholder='Amount to be escrowed' />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Expiry</label>
                                        <input type="text" name="name" class="form-control" id="inputName" placeholder='Pick an expiration date' />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="inputName">Seller address</label>
                                        <input type="text" name="name" class="form-control" id="inputName" placeholder='The address of the receiving seller' />
                                    </div>


                                    <div class="form-group col-md-12">
                                        <label for="inputEmail">Attachments</label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-clg" data-dismiss="modal">Create Escrow</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
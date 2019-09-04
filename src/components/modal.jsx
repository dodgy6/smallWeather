import React                                from 'react'
import { Modal, ModalBody, ModalFooter }    from 'reactstrap'

import If   from './if'

export default props => (
    <Modal isOpen={props.modal}>  
        <ModalBody>
            <div className="row">
                <div className="col-sm-12">
                    <label>{props.info}</label>
                </div>
            </div>
        </ModalBody>
        <ModalFooter>
            <If test={props.remove}>
                <button type="button" className="btn btn-danger" onClick={() => props.deleteMessage()}>Delete</button>
            </If>
            <button type="button" className="btn btn-info" onClick={() => props.toggle()}>Cancel</button>
        </ModalFooter>
    </Modal>
)
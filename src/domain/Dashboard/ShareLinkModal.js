import React from 'react';
import {Modal,ModalHeader, ModalBody} from 'reactstrap';
export default function ShareLinkModal({modal, toggle, link}) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="text-uppercase justify-content-lg-around"> 
                Share Link
            </ModalHeader>
            <ModalBody>
                <div>{link}</div>
            </ModalBody>
        </Modal>
    )
}

import React from 'react';
import {Modal,ModalHeader, ModalBody, Input} from 'reactstrap';
export default function ShareLinkModal({modal, toggle, link}) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="text-uppercase justify-content-lg-around"> 
                Share Link
            </ModalHeader>
            <ModalBody>
                <Input type='text' readOnly defaultValue={link}></Input>
            </ModalBody>
        </Modal>
    )
}

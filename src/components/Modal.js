import React from "react";
import './Modal.scss';
import Button from "./Button";

const Modal = ({ isOpen, onClose, children }) => {
    const closeModal = () => {
        onClose();
    };
    
    if (!isOpen) return null;

    return(
        <div className="modal open" onClick={onClose}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Modal Header</h2>
                    <span className="close" onClick={closeModal}>&times;</span>
                </div> 
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <Button size={'large'} fullwidth color={'blue'} onClick={closeModal}>Close</Button>
                </div>
            </div>
        </div>
    )
}


export default Modal;
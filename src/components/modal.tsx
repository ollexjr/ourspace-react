import React from 'react';

import { Button, Modal } from 'react-bootstrap';

export const ModalSheetWrapper: React.FC<{
    // callbacks for children to modify this state
    // could cause infinite loops?
    children: [
        (show: () => void) => React.ReactElement,
        () => React.ReactElement
    ],
    onConfirm: () => Promise<any>,
    title: string,
    acceptText?: string,
}> = ({ children, onConfirm, title, acceptText }) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children[1]()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={() => onConfirm().then(t => handleClose())}>{acceptText ?? "Accept"}</Button>
                </Modal.Footer>
            </Modal>
            {children[0](handleShow)}
        </>
    );
}
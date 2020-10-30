import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export const WithInlineEditInput: React.FC<{
    onEdit: () => false,

}> = ({ children }) => {
    const [state, useState] = React.useState();
    return (
        <div>
            <Button size="sm">edit</Button>
            {children}

            <Form.Control type="text" />
        </div>
    )
}

export const WithEditForm: React.FC<{
    editForm: () => any,
}> = ({ editForm, children }) => {
    const [editing, setState] = React.useState<boolean>(false);
    const wrapper = (v: any) => {
        return <Modal onHide={() => setState(false)} show={editing}>
            <Modal.Body>
                {v}
            </Modal.Body>
        </Modal>
    }
    return (
        <div style={{ position: 'relative' }}>
            <Button className="p-0" style={{
                position: 'absolute',
                top: 0,
                right: 0,
            }} size="sm" variant="" onClick={() => setState(true)}>edit</Button>
            {children}
            {editing && wrapper(editForm())}
        </div>
    )
}
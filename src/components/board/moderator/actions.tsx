import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from 'stores/app';
import { Form, Button, InputGroup, Modal } from 'react-bootstrap';
import { IBoard, IThread, IComment, ICommunityUserRef } from 'model/compiled';

export const ModerateForm: React.FC<{ 
    src?: IBoard | IThread | IComment | ICommunityUserRef ,
    //b?: IBoard, 
    //t?: IThread, 
    //c?: IComment 
}> = ({ src }) => {
    const store = useAppStore();

    const [banLength, setBan] = React.useState(0);
    return (
        <div>
            <h5>For:</h5>

            <div>
                {JSON.stringify(src)}
            </div>

            <Form>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Reasons</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Check
                    label="Is illegal content (any media is deleted, user is permanently banned)"
                    type="checkbox"
                />

                <Form.Check
                    onChange={() => setBan(banLength > 0 ? 0 : 10000)}
                    checked={banLength > 0}
                    type="checkbox"
                    label="Suspend this user from posting" />

                {banLength ? <input type="date" /> : null}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your reason and any remarks (shown to poster, and visible in the ban log)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>A message to the user</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button>Cancel</Button>
                    <Button>Submit action</Button>
                </div>
            </Form>
        </div>
    )
}


export const ModeratorActionsGlobal = observer(() => {
    const store = useAppStore();
    return (
        <Modal show={store.moderate != undefined} onHide={() => store.moderate = undefined} >
            <Modal.Header closeButton>
                Moderation action
            </Modal.Header>
            <Modal.Body>
                <ModerateForm src={store.moderate} />
            </Modal.Body>
        </Modal>
    )
})
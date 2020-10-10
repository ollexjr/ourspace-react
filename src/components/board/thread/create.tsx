import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ThreadCreateForm: React.FC<{ onSubmit: () => any }> = () => {

    const [validated, setValidated] = React.useState(false);
    const [state, set] = React.useState({
        title: "",
        password: "test",
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formThreadTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                    placeholder="Title"
                    onChange={(v) => set({ ...state, title: v.target.value })} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <div className="d-flex flex-row">
                <Button variant="primary" type="submit">
                    Create
                </Button>
                <Button variant="primary" type="submit">
                    Save Draft
                </Button>
            </div>
        </Form>
    )
}

export default ThreadCreateForm;
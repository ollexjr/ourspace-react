import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useBoardStore } from 'stores/board';

export const BoardEditFields: React.FC = () => {
    //const store = useBoardStore();
    // dadwdawdawdaw
    let history = useHistory();
    const [state, set] = React.useState({
        identifier: "",
        title: "test",
        description: "",
    });
    const [error, setError] = React.useState<number>(0)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        //onSubmit().then(t => {})
        //onSubmit(state.identifier, state.password).then(t => {
        //    setError(0)
        //}).catch(() => setError(404))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Community Name</Form.Label>
                <Form.Control type="text"
                    placeholder="Think of a name for your community"
                    onChange={(v) => set({ ...state, identifier: v.target.value })} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Community Title</Form.Label>
                <Form.Control type="textarea"
                    placeholder="Description"
                    onChange={(v) => set({ ...state, title: v.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Community Rules</Form.Label>
                <Form.Control type="textarea"
                    placeholder="Description"
                    onChange={(v) => set({ ...state, title: v.target.value })} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    )
}
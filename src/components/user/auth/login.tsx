import React, { useState } from 'react';
import { useAppStore } from 'stores/app';
import { Form, Button } from 'react-bootstrap';
import {
    useHistory,
    Link,
} from "react-router-dom";


export const UserLoginForm: React.FC<{ onSubmit: (email: string, password: string) => Promise<any> }> = ({ onSubmit }) => {
    let history = useHistory();

    const [state, set] = useState({
        identifier: "",
        password: "test",
    })

    const [error, setError] = useState<number>(0)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        onSubmit(state.identifier, state.password).then(t => {
            setError(0)
        }).catch(() => setError(404))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"
                    placeholder="Enter username"
                    onChange={(v) => set({ ...state, identifier: v.target.value })} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    onChange={(v) => set({ ...state, password: v.target.value })} />
                <Form.Text className="text-muted">
                    <Link to="/login/recover">I've forgotten my password</Link>
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}
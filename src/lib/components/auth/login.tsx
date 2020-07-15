import React, { useState } from 'react';
import { useAppStore } from '../../stores/app';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const UserLoginForm: React.FC = () => {
    const store = useAppStore();

    const [state, set] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        store.login(state.username, state.password).catch(() => false)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"
                    placeholder="Enter username"
                    onChange={(v) => set({ ...state, username: v.target.value })} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree with the terms and conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}
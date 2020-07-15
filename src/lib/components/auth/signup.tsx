import React, { useState } from 'react';
import { useAppStore } from '../../stores/app';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const UserSignupForm: React.FC<{ try: (username: string, email: string, password: string) => void }> = (props) => {

    const [state, set] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        props.try(state.username, state.email, state.password);
        //store.signup(state.username, state.email, state.password)
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

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter email"
                    onChange={(v) => set({ ...state, email: v.target.value })} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    onChange={(v) => set({ ...state, password: v.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree with the terms and conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    )
}
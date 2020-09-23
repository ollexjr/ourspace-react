import React, { useState } from 'react';
import { useAppStore } from 'stores/app';
import { Form, Button } from 'react-bootstrap';
import {
    useHistory,
} from "react-router-dom";

export const UserSignupForm:
    React.FC<{ onSubmit: (username: string, email: string, password: string) => Promise<any> }> =
    (props) => {
        let history = useHistory();

        const [state, set] = useState({
            username: "",
            email: "",
            password: ""
        })

        const [error, setError] = useState<number>(0)

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event?.preventDefault()
            props.onSubmit(state.username, state.email, state.password).catch(t => {
                //history.replace("/")
                setError(404)
            })
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
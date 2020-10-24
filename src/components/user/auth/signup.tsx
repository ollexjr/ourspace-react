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
                        Think of a unique username, like ittykitty or DoomMaster1999
                    </Form.Text>
                    <Form.Text className="text-muted">
                        Whatever you want really.
                     </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        onChange={(v) => set({ ...state, email: v.target.value })} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else, 
                            if you lose your password, we'll send a recovery email.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please provide a email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        onChange={(v) => set({ ...state, password: v.target.value })} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        required
                        type="checkbox"
                        label="I agree with the terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign up
                </Button>
                <p>{error > 0 && "Something went wrong..."}</p>
            </Form>
        )
    }
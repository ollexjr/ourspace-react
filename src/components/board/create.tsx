import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { TextEditor } from 'components/editor/editor';
import Editor from 'rich-markdown-editor';
import { PromiseButton } from 'components/button';
import { useAppStore } from 'stores/app';
import { IBoardCreate } from 'model/compiled';

const BoardCreateForm: React.FC<{ 
    onSubmit: (v: IBoardCreate) => Promise<any> 
}> = ({ onSubmit }) => {

    const store = useAppStore();
    const [validated, setValidated] = React.useState(false);
    const [state, set] = React.useState({
        name: "",
        description: "test",
    })

    const preSubmit = (): Promise<any> => {
        var o: IBoardCreate = {
            name: state.name,
        };
        return onSubmit(o);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formThreadTitle">
                <Form.Label>Community Name</Form.Label>
                <Form.Control type="text"
                    placeholder="Name"
                    onChange={(v) => set({ ...state, name: v.target.value })} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formThreadLink">
                <Form.Label>Tag line</Form.Label>
                <Form.Control type="text"
                    placeholder="Link"
                    onChange={(v) => set({ ...state, description: v.target.value })} />
                <Form.Text className="text-muted">
                    A short description to go in the title and header.
                </Form.Text>
            </Form.Group>
            <p>You can change everything else later!</p>


            <div className="d-flex flex-row justify-content-center">
                <PromiseButton onClick={preSubmit} variant="primary" type="submit">
                    Create
                </PromiseButton>
            </div>

            {state.name.length > 0 && 
                <p>
                    <h1 className="display-1">{state.name}</h1> <span>a community by @you</span>
                </p>}
        </Form>
    )
}

export default BoardCreateForm;
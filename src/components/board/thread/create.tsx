import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { TextEditor } from 'components/editor/editor';
import Editor from 'rich-markdown-editor';
import { PromiseButton } from 'components/button';
import { useAppStore } from 'stores/app';

import { IThreadCreateRequest } from 'model/compiled';

const ThreadCreateForm: React.FC<{
    boardId: string, 
    onSubmit: (v: IThreadCreateRequest) => Promise<any>,
    onDraft?: (v: IThreadCreateRequest) => Promise<any>
}> = ({ boardId, onSubmit, onDraft }) => {
    const store = useAppStore();

    const [validated, setValidated] = React.useState(false);
    const [state, set] = React.useState<{
        title: string,
        link: string,
        comment: string,
        error: any
    }>({
        title: "",
        link: "",
        comment: "",
        error: null,
    })

    const preSubmit = (): Promise<any> => {
        var o: IThreadCreateRequest = {
            boardId: boardId,
            title: state.title,
            link: state.link,
            content: state.comment,
        };
        return onSubmit(o).catch(err => set({ ...state, error: err }));
    }

    const preDraft = (): Promise<any> => {
        return Promise.reject();
    }

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

            <Form.Group controlId="formThreadLink">
                <Form.Label>Link</Form.Label>
                <Form.Control type="text"
                    placeholder="Link"
                    onChange={(v) => set({ ...state, link: v.target.value })} />
                <Form.Text className="text-muted">
                    A link to something on the web, it could be a news article, or an image.
                </Form.Text>
            </Form.Group>


            <Form.Group controlId="formThreadLink">
                <Form.Label>Comment</Form.Label>
                <div className="rounded pl-4">
                    <Editor
                        dark={store.isDarkTheme()}
                        defaultValue=""
                        onChange={(v) => set({ ...state, comment: v() })}
                        template={false}
                    />
                </div>
                <Form.Text className="text-muted">
                    Your comment...
                </Form.Text>
            </Form.Group>

            <div className="d-flex flex-row justify-content-end">
                <PromiseButton onClick={preSubmit} variant="primary" type="submit">
                    Create
                </PromiseButton>
                <PromiseButton onClick={preDraft} variant="primary" type="submit">
                    Save Draft
                </PromiseButton>
            </div>

            {state.error && <p>
                {JSON.stringify(state.error)}
            </p>}
        </Form>
    )
}

export default ThreadCreateForm;
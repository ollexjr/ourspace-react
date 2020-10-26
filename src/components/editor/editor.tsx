import React from 'react';

import { Editor as DraftJSEditor, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import { Navbar, Nav, Container, Button, Row, Col, Modal, Overlay, Spinner } from 'react-bootstrap';
import Editor from 'rich-markdown-editor';
import { dark } from './theme';

import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RichEditor: React.FC = () => {
    const [state, setState] = React.useState<EditorState>(() => EditorState.createEmpty())
    return (
        <DraftJSEditor editorState={state} onChange={(editorState) => setState(editorState)} />
    )
}

export const TextEditor: React.FC<{
    source?: string,
    cancelText: string,
    acceptText: string,
    buttons?: any,
    onAccept: (data: any) => Promise<any>,
    onCancel?: () => any
}> = ({ source, onAccept, onCancel, buttons }) => {
    //const [state, setState] = React.useState<EditorState>(() => EditorState.createEmpty())
    const [state, setState] = React.useState<{
        value: string,
        readOnly: boolean,
        template: boolean
    }>({
        readOnly: false,
        template: false,
        //dark: localStorage.getItem("dark") === "enabled",
        value: "",
    });
    const [isWaiting, setWaiting] = React.useState<boolean>(false);
    const target = React.useRef(null);

    return (
        <div className="border rounded px-2 py-2 d-flex flex-row" /*style={{ position: 'relative' }}*/ ref={target}>
            <div style={{
                visibility: isWaiting ? "visible" : "hidden",
                position: 'fixed',
                top: 0, right: 0, left: 0, bottom: 0,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, .5)'

            }}>
                <Spinner animation="border" variant="primary" />
            </div>
            <div className="flex-grow-1 pl-3 mx-2">
                <Editor
                    theme={dark}
                    defaultValue={source}
                    onChange={(v) => setState({ ...state, value: v() })}
                    //onSave={(v) => v()}
                    template={true}
                />
            </div>
            <div className="d-flex flex-column justify-content-end button-column">
                {onCancel && <Button variant="outline-dark" onClick={() => onCancel()} >
                    <FontAwesomeIcon icon={faTimes} />
                </Button>}
                <Button className="" variant="primary" onClick={() => {
                    setWaiting(true);
                    onAccept(state.value).finally(() => setWaiting(false))
                }} >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
                {buttons}
            </div>
        </div>
    )
}

const TextEditorDraftJs: React.FC<{ onAccept: (data: any) => Promise<any>, onCancel?: () => any }> = ({ onAccept }) => {
    const [state, setState] = React.useState<EditorState>(() => EditorState.createEmpty())
    const [isWaiting, setWaiting] = React.useState<boolean>(false);
    const target = React.useRef(null);

    return (
        <div className="border rounded p-3" style={{ position: 'relative' }} ref={target}>
            <div style={{
                visibility: isWaiting ? "visible" : "hidden",
                position: 'fixed',
                top: 0, right: 0, left: 0, bottom: 0,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, .5)'

            }}>
                <Spinner animation="border" variant="primary" />
            </div>
            <DraftJSEditor
                placeholder={"Leave a comment"}
                editorState={state} onChange={(editorState) => setState(editorState)} />
            <Button onClick={() => {
                setWaiting(true);
                onAccept(convertToRaw(state.getCurrentContent())).finally(() => setWaiting(false))
            }} >Accept</Button>
        </div >
    )
}
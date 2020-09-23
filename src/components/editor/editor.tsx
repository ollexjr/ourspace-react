import React from 'react';
import { Editor, EditorState } from 'draft-js';


export const RichEditor: React.FC = () => {
    const [state, setState] = React.useState<EditorState>(() => EditorState.createEmpty())
    return (
        <Editor editorState={state} onChange={(editorState) => setState(editorState)} />
    )
}
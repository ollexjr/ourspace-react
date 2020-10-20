import React from 'react';
import { ScreenScaffold } from 'components/screen';
import { useBoardStore } from 'stores/board';

import { Form, Button, Spinner } from 'react-bootstrap';


const FileInput: React.FC<{
    onPreview?: () => Promise<any>,
    onSubmit: (event: File) => Promise<any>
}> = ({ onSubmit, children }) => {
    const [value, setValue] = React.useState<File>();
    const [waiting, setWaiting] = React.useState<boolean>(false);

    const preSubmit = (e: any): Promise<any> => {
        e.preventDefault();
        setWaiting(true);
        if (value)
            return onSubmit(value).finally(() => setWaiting(false))
        return Promise.reject();
    }
    return (
        <Form onSubmit={preSubmit}>
            <div className="d-flex flex-row justify-content-between">
                <Form.File
                    id="image"
                    className="mr-2"
                    label={value ? value.name : ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target
                        && e.target.files
                        && setValue(e.target?.files[0])}
                    required
                    isInvalid={false}
                    feedback="none"
                    feedbackTooltip
                    custom
                />
                <Button type="submit">Upload {waiting && <Spinner animation="border" />}</Button>
            </div>
            <small>Images larger than 128x128 will be resized</small>
            {value && <p>{value.name}</p>}
        </Form>
    )
}


const RestrictionSelector: React.FC = () => {
    return (
        <div>

        </div>
    )
}

const ScreenEdit: React.FC = () => {

    const store = useBoardStore();

    return (
        <ScreenScaffold title="Settings">
            <h3>Set community icon</h3>
            <FileInput onSubmit={(e) => store.uploadIcon(e)} />
        </ScreenScaffold>
    )
}

export default ScreenEdit;
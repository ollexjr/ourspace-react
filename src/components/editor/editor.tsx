import React from 'react';

import ReactMarkdown from 'react-markdown'
import { Navbar, Nav, Container, Button, Row, Col, Modal, Overlay, Spinner } from 'react-bootstrap';
import ReactMde from 'react-mde';
import { dark } from './theme';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-mde/lib/styles/css/react-mde-all.css";


export const TextEditor: React.FC<{
    source?: string,
    cancelText: string,
    acceptText: string,
    buttons?: any,
    onAccept: (data: any) => Promise<any>,
    onCancel?: () => any
}> = ({ source, onAccept, onCancel, buttons }) => {

    const [value, setValue] = React.useState<string>();
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview" | undefined>("write");
    const [isWaiting, setWaiting] = React.useState<boolean>(false);
    const target = React.useRef(null);

    //const ref = React.useRef<Editor>(null);
    const onAcceptPre = () => {
        if (isWaiting) {
            return;
        }
        setWaiting(true);
        onAccept(value).finally(() => {
            setValue("");
            setWaiting(false);
        }).catch(t => {
            setWaiting(false);
        })
    }

    const Wrapper = (v: any) => {
        return (
            <div className="d-flex flex-row">
                <div style={{
                    visibility: isWaiting ? "visible" : "hidden",
                    position: 'fixed',
                    top: 0, right: 0, left: 0, bottom: 0,
                    zIndex: 100,
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, .5)'

                }}>
                    <Spinner animation="border" variant="primary" />
                </div>
                {v}
                <div className="ml-1 d-flex flex-column justify-content-end _button-column">
                    {onCancel && <Button variant="outline-dark" onClick={() => onCancel()} >
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>}
                    <Button className="" variant="primary" onClick={onAcceptPre} >
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                    {buttons}
                </div>
            </div>
        )
    }

    return (
        Wrapper(
            <ReactMde
                value={value}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) => {
                    return Promise.resolve(<ReactMarkdown source={markdown} />);
                }}
                onChange={setValue}
            />
        )
    )
}

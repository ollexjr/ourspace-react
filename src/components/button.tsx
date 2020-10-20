import React from 'react'

import {
    withRouter,
    RouteComponentProps
} from "react-router-dom";
import { Button, ButtonProps, OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const _LinkButton: React.FC<{ to: string } & RouteComponentProps & ButtonProps> = (props) => {
    return <Button {...props} onClick={() => props.location.pathname == props.to || props.history.push(props.to)}>{props.children}</Button>
}

export const LinkButton = withRouter(_LinkButton);

// button that is very basically network aware via a promise result, 
// and reflects that in with a loading and result indicator
export const NetworkedButton: React.FC<{ onClick: () => Promise<any>, message: string, successMessage: string }> = ({ message, successMessage, children, onClick }) => {
    const [state, setState] = React.useState(0);
    return <Button onClick={() => {
        setState(1)
        onClick().then(t => {
            setState(2);
        }).catch(t => {
            setState(3);
        })
    }}> {children}
        {state == 1 && <Spinner animation="border" />}
        {state > 1 && <FontAwesomeIcon icon={state == 2 ? faCheck : faTimes} />}
        {state < 2 ? message : successMessage}
    </Button>
}

export const PromiseButton: React.FC<{ onClick: () => Promise<any> } & ButtonProps> = ({ children, onClick }, props) => {
    const [loading, setState] = React.useState<boolean>(false);
    return <Button {...props} variant={""} onClick={() => {
        if (loading)
            return;
        setState(true)
        onClick().finally(() => {
            setState(false);
        })
    }}>
        {loading ? <Spinner animation="border" /> : children}
    </Button>
}

export const IconButton: React.FC<{ 
    onClick: () => Promise<any> } & ButtonProps> = ({ children, onClick }, props) => {
    const [loading, setState] = React.useState<boolean>(false);
    return (
        <Button {...props}>
            <FontAwesomeIcon icon={faTimes} />
        </Button>
    )
}

export const TooltipButton: React.FC<{
    onClick: () => Promise<any>, tooltip: string, text: string
} & ButtonProps> = ({ onClick, children, tooltip }, props) => {
    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
                (
                    <Tooltip id="button-tooltip">
                        {tooltip}
                    </Tooltip>
                )}
        >
            <PromiseButton {...props}>{children}{tooltip}</PromiseButton>
        </OverlayTrigger>
    )
}

export const Fab = () => {

}

export const FabContainer: React.FC = ({ children }) => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '1em',
        }}>
            {children}
        </div>
    )
}
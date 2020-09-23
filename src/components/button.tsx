import React from 'react'

import {
    withRouter,
    RouteComponentProps
} from "react-router-dom";
import { Button, ButtonProps } from 'react-bootstrap';

const _LinkButton: React.FC<{ to: string } & RouteComponentProps & ButtonProps> = (props) => {
    return <Button {...props} onClick={() => props.location.pathname == props.to || props.history.push(props.to)}>{props.children}</Button>
}

export const LinkButton = withRouter(_LinkButton);
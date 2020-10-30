import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommunityAvatar } from 'components/board/avatar';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { Navbar } from 'react-bootstrap';

export const Brand1: React.FC<{ className: string }> = ({ className }) => {
    return (
        <Link to="/">
            <Navbar.Brand href="/" className={className} style={{
                //fontWeight: 900,
            }}>
                <CommunityAvatar className="d-none _d-md-inline" size={36} />
                <FontAwesomeIcon className="d-none rounded ml-1 mr-1" icon={faPlus} />
                <span className="d-inline d-sm-inline ml-2 _font-weight-bold">
                    our
                </span>
                <sup>#</sup>
                <span className="_text-primary">
                    spaces
                </span>
            </Navbar.Brand>
        </Link>
    )
}

export const Brand3: React.FC<{ className: string }> = ({ className }) => {
    return (
        <Link to="/">
            <Navbar.Brand href="/" className={className} style={{
                //fontWeight: 900,
            }}>
                <CommunityAvatar className="d-none _d-md-inline" size={36} />
                <FontAwesomeIcon className="d-none rounded ml-1 mr-1" icon={faPlus} />
                <span className="d-block" style={{
                    lineHeight: 0,
                }}>
                    our
                </span>
                <span style={{
                    lineHeight: 0,
                }}>
                    spaces
                </span>
            </Navbar.Brand>
        </Link>
    )
}

export const Brand: React.FC<{ className: string }> = ({ className }) => {
    return (
        <Link to="/">
            <Navbar.Brand href="/" className={className} style={{
                //fontWeight: 900,
            }}>
                <CommunityAvatar className="d-none _d-md-inline" size={36} />
                <FontAwesomeIcon className="d-none rounded ml-1 mr-1" icon={faPlus} />
                <span className="d-block">
                    <span className="text-primary">#</span>spaces
                </span>
            </Navbar.Brand>
        </Link>
    )
}
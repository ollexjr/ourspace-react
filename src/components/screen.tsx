import React from 'react';
import { Container } from 'react-bootstrap';

export const ScreenScaffold: React.FC<{ title: string }> = ({ children, title }) => {
    return (
        <Container className="">
            <h1 className="py-4">{title}</h1>
            <div className="ml-2">
                {children}
            </div>
        </Container>
    )
}


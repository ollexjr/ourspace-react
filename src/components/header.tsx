import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const ImageHeader: React.FC<{ src: string }> = ({ src, children }) => {
    return (
        <Jumbotron 
            className="mb-0 p-4" 
            style={{ 
                backgroundSize: 'cover',
                backgroundImage: src,
                //backgroundImage: `url("https://dev.ourspace.dev/res/bg-2.png")` 
            }}>
            {children}
        </Jumbotron>
    )
}

export const ImageHeaderParallax: React.FC<{ src: string }> = ({ src, children }) => {
    return (
        <Jumbotron
            className="mb-0">
            <h1>Header</h1>
            {children}
        </Jumbotron>
    )
}
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export const Jumbosheet: React.FC<{ url?: Array<string> }> = ({ children }) => {
    return (
        <Container fluid>
            <Row>
                <Col className="col-1 col-0 col-md-4" style={{
                    height: "100vh",
                    backgroundSize: 'cover',
                    backgroundImage: "url('https://source.unsplash.com/5XOOcBrDvFE/800x1000')"
                    //"url('https://source.unsplash.com/collection/541345/800x1000')" //416021
                }} />
                <Col className="col-11 col-md-8 p-0 bg-white">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

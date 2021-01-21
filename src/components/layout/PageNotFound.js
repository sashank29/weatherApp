import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const PageNotFound = () => {
    return ( <React.Fragment>
        <Row className="justify-content-center mt-5">
            <Col sm={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h2" className="text-opal">Page Not Found</Card.Title>
                        <p className="fs-1">The page you are looking for was not found</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </React.Fragment> );
}

export default PageNotFound;
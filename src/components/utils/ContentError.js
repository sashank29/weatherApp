import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({
    error
}) => {
    return (<Alert variant="danger">
        <pre>
            {JSON.stringify(error, null, 2)}
        </pre>
    </Alert>)
}

export default Error;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({
    icon,
    spin,
    ...props
}) => {

    return <React.Fragment>
        <FontAwesomeIcon icon={icon} spin={spin ?? false} { ...props } fixedWidth />
    </React.Fragment>;
};

export default Icon;
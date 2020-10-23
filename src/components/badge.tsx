import React from 'react';
import { Badge, BadgeProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconBadge: React.FC<{
    icon?:any,
} & BadgeProps> = ({ icon, children }, props) => {
    return (
        <Badge {...props}>
            <FontAwesomeIcon icon={icon} />
        </Badge>
    )
}
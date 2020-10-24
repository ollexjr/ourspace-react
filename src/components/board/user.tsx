import React from 'react';
import { Badge, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IUserRef, ICommunityUserRef } from 'model/compiled';
import { faHammer, faUserShield, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserBadge: React.FC<{ variant?: string, icon: any, label?: string }> = ({ variant, icon, label, children }) => {
    return (
        <OverlayTrigger
            trigger={["hover", "focus"]}
            overlay={
                <Tooltip id="user-badge-label">
                    {label}
                </Tooltip>
            }
        >
            <Badge variant={variant} className="ml-1">
                <FontAwesomeIcon icon={icon} />
            </Badge>
        </OverlayTrigger>
    )
}

export const CommunityUserInline: React.FC<{ className?: string, user?: ICommunityUserRef }> = ({ className, user }) => {
    if (!user) {
        return <span>user undefined</span>;
    }
    return (
        <OverlayTrigger
            trigger={["hover", "focus"]}
            overlay={
                <Popover id="user-badge-label" className="p-2">
                    <div>@{user.username}</div>
                    <div className="card-title">Community Karma: ???</div>
                    <div>
                        {user.isAdmin && <UserBadge label="Admin" variant="danger" icon={faHammer} />}
                        {user.isMod && <UserBadge label="Moderator" icon={faUserShield} />}
                    </div>
                </Popover>
            }
        >
            <span className={`${className} d-flex flex-row button-row`}>
                <Link to={"/@" + user.username}>
                    <span className="username font-weight-bold">
                        @{user.username}
                    </span>
                </Link>
                {user.isAdmin && <UserBadge label="Admin" variant="danger" icon={faHammer} />}
                {user.isMod && <UserBadge label="Moderator" icon={faUserShield} />}
            </span>
        </OverlayTrigger>
    )
}
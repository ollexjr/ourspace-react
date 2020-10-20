import React from 'react';
import { Image, OverlayTrigger, Tooltip, Popover, Badge } from 'react-bootstrap';
import { IUserRef } from 'model/compiled';
import { Link } from 'react-router-dom';

export const CircleAvatar: React.FC<{
    onClick?: () => any,
    className?: string,
    src?: string,
    size?: number,
    label?: string
}> = ({ className, onClick, src, size, label }) => {
    if (!src) {
        src = "https://dev.ourspace.dev/img/static/bg-128.png"; 
        //src = "https://source.unsplash.com/pCcGpVsOHoo/64x64"
        //src = "https://source.unsplash.com/random"
    }
    if (!size) {
        size = 128
    }
    return (
        <OverlayTrigger
            trigger={["hover","focus"]}
            overlay={
                <Tooltip id="overlay-example">
                    @{label}
                </Tooltip>
            }
        >
            <span className="circle-avatar">
                <Image
                    className={className}
                    onClick={onClick}
                    src={src} style={{
                        width: size,
                        height: size,
                        objectFit: "cover",
                        borderRadius: size,
                    }} />
                {label && <span>{label.substr(0, 2)}</span>}
            </span>
        </OverlayTrigger>
    )
}


export const UserLink: React.FC<{ user: IUserRef }> = ({ user, children }) => {
    const debug = false;
    return (
        <OverlayTrigger
        trigger={["hover","focus"]}
            overlay={
                <Popover id={`popopover-${user.username}`}>
                    <Popover.Content>
                        <h6>
                            @{user.username} (Join x days ago)
                        </h6>
                        <div>
                            Community Karma:
                        </div>
                    </Popover.Content>
                </Popover>
            }
        >
            <Link to={`/@${user.username}`}>
                {debug && <strong>@{user.username}</strong>}
                {children}
            </Link>
        </OverlayTrigger>
    )
}
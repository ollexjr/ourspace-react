import React from 'react';
import { Image, Badge, OverlayTrigger, Popover } from 'react-bootstrap';
import { IBoard } from 'model/compiled';
import { Link } from 'react-router-dom';

export const CommunityAvatar: React.FC<{
    onClick?: () => any,
    className?: string,
    src?: string,
    size?: number,
    label?: string
}> = ({ className, onClick, src, size, label }) => {
    if (!src) {
        src = "https://source.unsplash.com/random"
    }
    if (!size) {
        size = 128
    }
    return (
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
            <Badge>
                100k
            </Badge>
            {label && <span>{label.substr(0, 2)}</span>}
        </span>
    )
}

export const CommunityLinkPopover: React.FC<{ boardId: string }> = ({ boardId, children }) => {
    const debug = false;
    return (
        <OverlayTrigger
            trigger={["hover", "focus"]}
            overlay={
                <Popover id={`popopover-${boardId}`}>
                    <Popover.Content>
                        <h6>
                            +{boardId}
                        </h6>
                    </Popover.Content>
                </Popover>
            }
        >
            <Link to={`/+${boardId}`}>{children}</Link>
        </OverlayTrigger>
    )
}
import React from 'react';
import { Image, Badge, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { IBoard } from 'model/compiled';
import { Link } from 'react-router-dom';

export const CommunityAvatar: React.FC<{
    onClick?: () => any,
    wrapperClassName?: string,
    className?: string,
    src?: string,
    size?: number,
    label?: string
}> = ({ wrapperClassName, className, onClick, src, size, label }) => {
    if (!src) {
        
        src = "https://www.ourspace.dev/img/static/bg-128.png"; 
        //"https://source.unsplash.com/pCcGpVsOHoo/64x64"
        //src = "https://source.unsplash.com/random/64x64"
    }
    if (!size) {
        size = 128
    }
    const c = wrapperClassName ? wrapperClassName + " circle-avatar" : "circle-avatar";
    return (
        <span className={c}>
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
    )
}

export const CommunityLinkPopover: React.FC<{ icon?: string, boardId: string }> = ({ icon, boardId, children }) => {
    const debug = false;
    return (
        <OverlayTrigger
            trigger={["hover", "focus"]}
            overlay={
                <Popover id={`popopover-${boardId}`}>
                    <Popover.Content className="d-flex flex-row align-items-center">
                        <CommunityAvatar size={48} src={`https://www.ourspace.dev/img/communityicon/${boardId}.apng`} />
                        <h6 className="ml-2">
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
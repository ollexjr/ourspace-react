import React from 'react';
import ReactPlayer from 'react-player';

export const MediaSource: React.FC<{
    preview: boolean
    size?: string
    network?: string,
    src?: string,
    onOpen?: () => any,
    onEvent?: (ev: string) => any
}> = ({ onOpen, preview, src, onEvent }) => {

    const getWrapper = (v: any) => {
        if (preview) {
            return (
                <div onClick={onOpen} style={{
                    maxHeight: '300px', overflowY: 'hidden'
                }}>
                    {v}
                </div>
            )
        }
        return v;
    }

    const isVideo = src && ReactPlayer.canPlay(src);
    if (isVideo) {
        return (
            <div className="d-flex justify-content-center rounded-iframe-container mb-2">
                <ReactPlayer
                    light
                    controls
                    onPlay={() => onEvent && onEvent("link/playing")}
                    onPause={() => onEvent && onEvent("link/pause")}
                    url={src} />
            </div>
        )
    }




    return (
        getWrapper(<img className="card-img rounded border" src={src ?? ""} />)
    )
}
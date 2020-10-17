import React from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';

export const MediaSource: React.FC<{
    preview: boolean
    size?: string
    network?: string,
    aspectRatio?: number,
    thumb?: string,
    src?: string,
    onOpen?: () => any,
    onEvent?: (ev: string) => any
}> = ({ onOpen, aspectRatio, preview, src, thumb, onEvent }) => {
    const overflowWrapper = (child: any) => {
        if (preview) {
            return (
                <div onClick={onOpen}
                    className="rounded"
                    style={{
                        maxHeight: preview ? '350px' : undefined,
                        overflowY: 'hidden',
                    }}>
                    {child}
                </div>
            )
        }
        return child;
    }
    const isVideo = src && ReactPlayer.canPlay(src);

    let height: number = 0;

    if (isVideo) {
        // from inspecting the DOM, youtube placeholders render with a height of 358
        height = 358;
    }

    if (thumb && aspectRatio) {
        height = (320 * aspectRatio);
        if (preview && height > 350) {
            height = 350;
        }
    }

    if (!thumb && !isVideo) {
        return null;
    }

    const loader = (child: any) => {
        return (
            <LazyLoad
                debounce
                once
                height={height}
                offset={window.innerHeight}>
                {overflowWrapper(child)}
            </LazyLoad>
        )
    }

    if (isVideo) {
        return (
            loader(
                <div className="d-flex justify-content-center rounded-iframe-container mb-2">
                    <ReactPlayer
                        light
                        controls
                        className="border rounded"
                        width='100%'
                        onPlay={() => onEvent && onEvent("link/playing")}
                        onPause={() => onEvent && onEvent("link/pause")}
                        url={src} />
                </div>
            )
        )
    }

    return (
        loader(<img className="card-img rounded border" src={thumb} />)
    )
}
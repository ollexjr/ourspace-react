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
                offset={window.innerHeight*2}>
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

    
    const u = src && new URL(src);
    //u && console.log(u.hostname, u);
    if (u && u.hostname == "twitter.com") {}

    if (u && u.hostname == "imgur.com") {
        return loader(
            <>
                <blockquote
                    className="imgur-embed-pub"
                    lang="en"
                    data-id="a/Ugbg1ZM">
                    <a href={src}>No More Free Lunch</a>
                </blockquote>
                <script async src="//s.imgur.com/min/embed.js"></script>
            </>
        )
    }

    if (u && u.hostname == "giphy.com") {
        return loader(
            <div style={{ width: "100%", height: 0, paddingBottom: "178%", position: 'relative' }}>
                <iframe src="https://giphy.com/embed/XbVE8H818ckOWuHTEU"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    className="giphy-embed" allowFullScreen>
                </iframe>
            </div>
        )
    }

    return (
        loader(<img className="card-img rounded border" src={thumb} />)
    )
}
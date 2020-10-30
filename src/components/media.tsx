import React from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import { Modal } from 'react-bootstrap';

export const MediaSource: React.FC<{
    width?: number | string,
    height?: number,
    preview: boolean
    size?: string
    network?: string,
    aspectRatio?: number,
    thumb?: string,
    className?: string,
    src?: string,
    onOpen?: () => any,
    onEvent?: (ev: string) => any
}> = ({ onOpen, width, height, aspectRatio, preview, src, thumb, onEvent }) => {
    preview = false;
    const maxHeight = preview ? '350px' : undefined;

    const [modal, setModal] = React.useState<boolean>(false);

    if (thumb && aspectRatio && !height) {
        height = (320 * aspectRatio);
        if (preview && height > 350) {
            height = 350;
        }
    }

    const overflowWrapper = (child: any) => {
        if (preview) {
            return (
                <div onClick={onOpen}
                    className="rounded"
                    style={{
                        maxHeight: height,
                        boxShadow: '1px 1px 1px 1px black',
                        overflowY: 'hidden',
                    }}>
                    {child}
                </div>
            )
        }
        return child;
    }
    const isVideo = src && ReactPlayer.canPlay(src);



    if (isVideo) {
        // from inspecting the DOM, youtube placeholders render with a height of 358
        height = 200;
        //height = 358;
    }


    if (!thumb && !isVideo) {
        return null;
    }

    const wrapModal = (child: any): any => {
        return (
            <>
                {modal && < Modal className="transparent" show={modal} onHide={() => setModal(false)} >
                    {child}
                    <div>
                        <small>View Thread</small>
                    </div>
                </Modal>}
                <LazyLoad
                    debounce
                    once
                    height={height}
                    offset={window.innerHeight * 2}>
                    {overflowWrapper(child)}
                </LazyLoad>
            </>
        )
    }

    const loader = (child: any) => {
        return wrapModal(child)
    }

    if (isVideo) {
        return (
            loader(
                <div className="rounded-iframe-container mb-2">
                    <ReactPlayer
                        light
                        controls
                        className="border rounded"
                        //width={width}
                        width='auto'
                        //width='100%'

                        height={height}
                        onPlay={() => onEvent && onEvent("link/playing")}
                        onPause={() => onEvent && onEvent("link/pause")}
                        url={src} />
                </div>
            )
        )
    }


    const u = src && new URL(src);
    //u && console.log(u.hostname, u);
    if (u && u.hostname == "twitter.com") { }

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
                <iframe
                    onClick={() => onOpen && onOpen()}
                    src="https://giphy.com/embed/XbVE8H818ckOWuHTEU"
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
        loader(<img
            onClick={() => setModal(true)}
            //onClick={() => onOpen && onOpen()}
            style={{
                objectFit: 'cover',
                width: width,
                height: height,
            }}

            className="card-img rounded border"
            src={thumb} />)
    )
}
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { ParallaxBanner } from 'react-scroll-parallax';

export const ImageHeader: React.FC<{ animated?: boolean, src: string }> = ({ animated, src, children }) => {
    if (animated)
        // "https://source.unsplash.com/pCcGpVsOHoo/1090x400"
        return (
            <ImageHeaderParallax src={src} >
                {children}
            </ImageHeaderParallax>
        )
    return (
        <Jumbotron
            className="mb-0 p-4"
            style={{
                backgroundSize: 'cover',
                backgroundImage: src,
                //backgroundImage: `url("https://dev.ourspace.dev/res/bg-2.png")` 
            }}>
            {children}
        </Jumbotron>
    )
}

export const ImageHeaderParallax: React.FC<{ src: string }> = ({ src, children }) => {
    return (
        <ParallaxBanner
            style={{ height: "auto" }}
            className="jumbotron border-bottom mb-0 px-1 py-4 py-md-5 px-md-4 _text-stroke-children"
            layers={[
                {
                    //image: "https://source.unsplash.com/random",
                    image: src,
                    amount: .8,
                    props: {
                        style: {
                            zIndex: 0,
                        }
                    }
                }]}
        >
            {/* fix child being hidden by parallax layers*/}
            <div style={{ position: 'relative' }}>
                {children}
            </div>
        </ParallaxBanner >
    )
}
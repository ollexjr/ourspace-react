import React from 'react';
import { Image } from 'react-bootstrap';

export const CircleAvatar: React.FC<{ src?: string, size?: number }> = ({ src, size }) => {
    if (!src) {
        src = "https://source.unsplash.com/random"
    }
    if (!size) {
        size = 128
    }
    return (
        <Image src={src} style={{
            width: size,
            height: size,
            objectFit: "cover",
            borderRadius: size,
        }} />
    )
} 
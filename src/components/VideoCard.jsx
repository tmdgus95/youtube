import React from 'react';
import { formatAgoe } from '../util/date';

export default function VideoCard({ video }) {
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    return (
        <li>
            <img src={thumbnails.medium.url} alt={title} />
            <div>
                <p>{title}</p>
                <p>{channelTitle}</p>
                <p>{formatAgoe(publishedAt, 'ko')}</p>
            </div>
        </li>
    );
}

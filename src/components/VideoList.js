import React from 'react'

import { Grid } from '@material-ui/core'

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideo = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (
        <Grid spacing={10}>
            {listOfVideo}
        </Grid>
    );
}

export default VideoList;
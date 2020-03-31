import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'poniter' }} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: '20px' }} src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
                <Typography varient="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;
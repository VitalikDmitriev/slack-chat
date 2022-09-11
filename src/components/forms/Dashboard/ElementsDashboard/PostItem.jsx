import { Stack, Typography } from '@mui/material';
import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <Stack direction='row' spacing={2}>
                <Typography sx={{ fontWeight: 'bold'}}>{props.post.title}:</Typography> 
                <Typography>{props.post.body}</Typography>
            </Stack>
        </div>
    );
}

export default PostItem;

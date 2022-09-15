import { Box, Card } from '@mui/material';
import React, { useState } from 'react';
import PostList from './PostList';
import  { useAuth } from '../../../../store/Auth';
import PostForm from './PostForm';

const Center = () => {
  const [posts, setPosts] = useState([
])
const { currentUser } = useAuth()
const title = currentUser.displayName
const createPost = (newPost) =>{
   setPosts([...posts, newPost])
}
    return (
      <Box p={4} sx={{
        width: 1100,
        height: 690,
        backgroundColor: 'gray'
      }}>
      <Box sx={{
            backgroundColor: 'white',
            width: 1100,
            height: 600,
          }} maxHeight='600'>
            <Card><PostList posts={posts}/></Card>
          </Box>
          <Box p={2} sx={{
            backgroundColor: 'red',
            width: 1068,
            height: 60,
          }}>
            <PostForm create={createPost}/>
          </Box>
    </Box>
    );
}

export default Center;

import { Box } from '@mui/material';
import React, { useState } from 'react';
import PostList from './PostList';
import MyInput from '../UI_DB/input/MyInput';
import MyButton from '../UI_DB/button/MyButton';
import { Stack } from '@mui/system';
import  { useAuth } from '../../../../store/Auth';




const Center = () => {
  const [posts, setPosts] = useState([
])

const { currentUser } = useAuth()
const title = currentUser.displayName
const [body, setBody] = useState('')

const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        id: Date.now(),
        title,
        body
    }
    setPosts([...posts, newPost])
}
    return (
        <Box p={4} sx={{
          width: 1100,
          height: 750,
          backgroundColor: 'gray'
        }}>
            
          <Box sx={{
            backgroundColor: 'white',
            width: 1100,
            height: 600,
          }} >
            <PostList posts={posts}/>
          </Box>
          <Box p={2} sx={{
            backgroundColor: 'white',
            width: 1068,
            height: 60
          }}>
            <form>
              <Stack direction='row' spacing={1}>
              <MyInput
                value={body}
                onChange={e => setBody(e.target.value)}
                tyoe='text'
                placeholder='Name Post'
                
                />
                <MyButton onClick={addNewPost}>Send</MyButton>
              </Stack>
            </form>
          </Box>



        </Box>
    );
}

export default Center;

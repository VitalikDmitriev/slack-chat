import { Stack } from '@mui/material'
import React, { useState } from 'react'
import MyButton from '../UI_DB/button/MyButton'
import MyInput from '../UI_DB/input/MyInput'
import { useAuth } from '../../../../store/Auth'


function PostForm({create}) {
    const { currentUser } = useAuth()
    const title = currentUser.displayName
    const [post, setPost] = useState({title, body: ''})
    
    const addNewPost = (e) => {
        e.preventDefault()
       const newPost = {
           ...post, id: Date.now()
       }
       create(newPost)
       setPost({title, body: ''})    
    }
    return (
        <form>
              <Stack direction='row' spacing={1}>
              <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Name Post'
                />
                <MyButton onClick={addNewPost}>Send</MyButton>
              </Stack>
            </form>
    )
}

export default PostForm

import React from 'react'
import PostItem from './PostItem';

function PostList({posts}) {
    
    return (
        <div>
            {posts.map((post)=> 
            <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;


import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <main>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message='Hello, I am learning ReactJS.' likesCount='21'  />
            <Post message='Hey it is my first post.' likesCount='1'  />
            
        </main>
    );
}

export default MyPosts;
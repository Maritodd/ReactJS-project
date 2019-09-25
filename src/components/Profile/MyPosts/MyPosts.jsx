import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}  />)
    
    let newElementPost = React.createRef();

    let addPost = () => {
debugger;
        let text = newElementPost.current.value;
        props.addPost(text);
    }

    return (
        <main className={s.content}>
            <div>
                <div>
                    <textarea ref={newElementPost}>Write your post...</textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </main>
    );
}

export default MyPosts;
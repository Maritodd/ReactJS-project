import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}  />)
    
    let newElementPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newElementPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <main className={s.content}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newElementPost} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </main>
    );
}

export default MyPosts;
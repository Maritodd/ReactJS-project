import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostChangeCreator } from '../../../redux/state';

function MyPosts(props) {

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}  />)
    
    let newElementPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newElementPost.current.value;
        props.dispatch(updateNewPostChangeCreator(text));
    }

    return (
        <main className={s.content}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newElementPost} value={props.newPostText} />
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
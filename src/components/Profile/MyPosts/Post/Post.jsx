import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <main>
            <div className={s.item}>
                <img src='https://www.w3schools.com/howto/img_avatar.png'></img>
                {props.message}
                <div>
                    <span>Like </span>
                    {props.likesCount}
                </div>
            </div>

        </main>
    );
}

export default Post;
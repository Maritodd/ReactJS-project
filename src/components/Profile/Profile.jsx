import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <main>
            <img src='https://www.optomaeurope.com/images/ProductApplicationFeatures/4kuhd/banner.jpg' />
            <div>
                avatar + description
            </div>
            <MyPosts />
        </main>
    );
}

export default Profile;
import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <main>
            <img src='https://www.optomaeurope.com/images/ProductApplicationFeatures/4kuhd/banner.jpg' />
            <div className={s.content}>
                avatar + description
            </div>
        </main>
    );
}

export default ProfileInfo;
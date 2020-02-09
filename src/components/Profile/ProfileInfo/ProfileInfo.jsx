import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <main>
            <img src='https://www.optomaeurope.com/images/ProductApplicationFeatures/4kuhd/banner.jpg' />
            <div className={s.content}>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div><a href={props.profile.contacts.facebook} target="_blank">FACEBOOK</a></div>
                <div><a href={props.profile.contacts.instagram} target="_blank">instagram</a></div>
                <div><a href={props.profile.contacts.github} target="_blank">github</a></div>
            </div>
        </main>
    );
}

export default ProfileInfo;
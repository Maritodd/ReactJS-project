import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../assets/images/img.png";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <main>
            <div className={s.content}>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userImg} />
                </div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
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
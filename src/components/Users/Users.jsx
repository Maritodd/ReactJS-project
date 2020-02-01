import React from 'react';
import * as axios from 'axios'
import userImg from '../../assets/images/img.png'

function Users(props) {
    // [
    //     {id: 1, photoUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    //         followed: true, fullName: 'Yaroslav', description: 'I am motherfucker', location: {city: 'Cherkasy', country: 'Ukraine'} },
    //     {id: 2, photoUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    //         followed: false, fullName: 'Vlad', description: 'I am motherfucker', location: {city: 'Kiyv', country: 'Ukraine'} },
    //     {id: 3, photoUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    //         followed: true, fullName: 'Mariia', description: 'I am motherfucker', location: {city: 'Chicago', country: 'USA'} }
    // ]

    const getUsers = () => {
        if (props.users.length === 0) {
            debugger;
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    return  <div>
        <button onClick={getUsers}>getUsers</button>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userImg} />
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.description}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;
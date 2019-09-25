let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello, I am learning ReactJS.', likesCount: 1 },
            { id: 2, message: 'Hey it is my first post.', likesCount: 21 },
            { id: 3, message: 'Hey it is my second post.', likesCount: 211 }
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Viktor' },
            { id: 2, name: 'Yaroslav' },
            { id: 3, name: 'Illya' },
            { id: 4, name: 'Mary' },
            { id: 5, name: 'Arthur' },
            { id: 6, name: 'Olya' }
        ],
        messages: [
            { id: 1, message: 'Hey' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'Bitch' },
            { id: 4, message: 'Suck my dick' },
            { id: 5, message: 'bye' }
        ]
    },
    sidebar: {
     friends: [
            { id: 1, name: 'Viktor' },
            { id: 2, name: 'Yaroslav' },
            { id: 3, name: 'Illya' },
            // { id: 4, name: 'Mary' },
            // { id: 5, name: 'Arthur' },
            // { id: 6, name: 'Olya' }
        ],
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 4,
        message: (postMessage),
        likesCount: 0
    };
    
    state.profilePage.posts.push(newPost);
}

export default state;

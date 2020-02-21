import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Element from './../../common/FormControl/FormControls';

function MyPosts(props) {

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}  />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <main className={s.content}>
            <NewPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElement}
            </div>
        </main>
    );
}

const maxLength10 = maxLengthCreator(10);
const Textarea = Element("textarea");

let NewAddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

const NewPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"}) (NewAddPostForm);

export default MyPosts;
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Element from "../common/FormControl/FormControls";

const maxLength10 = maxLengthCreator(10);
const Input = Element("input");

let LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength10]} />
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength10]} />
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'}  component={'input'} /> Remember me
        </div>
        <div>
            <button >Login</button>
        </div>
    </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm);

let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};




export default Login;
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Element from "../../common/FormControl/FormControls";

const maxLength10 = maxLengthCreator(10);
const Textarea = Element("textarea");

let AddNewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageBody"} component={Textarea} placeholder={"Enter your message..."} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddNewMessageReduxForm = reduxForm({form: "DialogsAddNewMessage"}) (AddNewMessageForm);

export default AddNewMessageReduxForm;
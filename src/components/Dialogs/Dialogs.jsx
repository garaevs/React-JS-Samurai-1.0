import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, Formik, Form } from 'formik';

const Dialogs = props => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = e => {
        // let body = e.target.value
        props.updateNewMessageBody(e.text);
        console.log(e.text);
        onSendMessageClick();
    };

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <AddMessageForm onNewMessageChange={onNewMessageChange} />

                        {/* <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message" />
          // </div>
          // <div>
          //   <button onClick={onSendMessageClick}>Send</button>
          // </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AddMessageForm = props => {
    const onSubmit = values => {
        props.onNewMessageChange(values);
    };

    return (
        <Formik initialValues={{ text: 'Your text' }} onSubmit={onSubmit}>
            <Form>
                <Field type='text' name='text' />
                <div>
                    <button type='submit'>Send</button>
                </div>
            </Form>
        </Formik>
    );
};

export default Dialogs;

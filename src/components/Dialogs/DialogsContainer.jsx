import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };

    const newMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (<Dialogs dialogsPage={state} sendMessage={sendMessage} updateNewMessageBody={newMessageChange}/>);
};

export default DialogsContainer;

import React from "react";
import classes from "./Dialogs.module.css";
import Message from "../Dialogs/Message/Message";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };

    const newMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
             { dialogsElements }
         </div>
          <div className={classes.messages}>
              { messagesElements }
              <input
                  onChange={newMessageChange}
                  value={newMessageBody}
                  placeholder="Введите сообщение"/>
              <button onClick={sendMessage}>Отправить</button>
          </div>
      </div>
    );
}

export default Dialogs;

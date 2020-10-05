import React from "react";
import classes from "./Dialogs.module.css";
import Message from "../Dialogs/Message/Message";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import MessageForm from "./MessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

    const sendMessage = (values) => {
       props.sendMessage(values.messageBody);
    };

    return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
             { dialogsElements }
         </div>
          <div className={classes.messages}>
              { messagesElements }
              <MessageForm onSubmit={sendMessage}/>
          </div>
      </div>
    );
}

export default Dialogs;

import React from "react";
import classes from "./Dialogs.module.css";
import Message from "../Dialogs/Message/Message";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    const sendMessage = () => {
       props.sendMessage();
    };

    const newMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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

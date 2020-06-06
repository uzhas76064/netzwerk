import React from "react";
import classes from "./Dialogs.module.css";
import Message from "../Dialogs/Message/Message";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);

    return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
             { dialogsElements }
         </div>
          <div className={classes.messages}>
              { messagesElements }
              <input type="text" placeholder="Введите сообщение"/>
              <button>Отправить</button>
          </div>
      </div>
    );
}

export default Dialogs;
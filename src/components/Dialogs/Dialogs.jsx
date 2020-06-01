import React from "react";
import classes from "./Dialogs.module.css";
import Message from "../Dialogs/Message/Message";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Dialogs = (props) => {


    let dialogsElements = props.d.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.m.map(message => <Message message={message.message} id={message.id}/>);

    return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
             { dialogsElements }
         </div>
          <div className={classes.messages}>
              { messagesElements }
          </div>
      </div>
    );
}

export default Dialogs;
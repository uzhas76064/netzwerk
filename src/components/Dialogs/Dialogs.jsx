import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/message/${props.id}`;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => (<div className={classes.message}>Привет</div>)


const Dialogs = (props) => {
    return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
            <DialogItem name="Павел" id="1"/>
            <DialogItem name="Андрей" id="2"/>
            <DialogItem name="Антон" id="3"/>
            <DialogItem name="Света" id="4"/>
            <DialogItem name="Света" id="5"/>
            <DialogItem name="Артемий" id="6"/>
         </div>
          <div className={classes.messages}>
              <Message message="Привет"/>
              <Message message="Как дела с учебой?"/>
              <Message message="Что делаешь?"/>
              <Message message="Давай дружить"/>
              <Message message="Зайдем сегодня в магазин?"/>
          </div>
      </div>
    );
}

export default Dialogs;
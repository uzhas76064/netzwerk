import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
             <div className={classes.dialog}>Павел</div>
             <div className={classes.dialog}>Андрей</div>
             <div className={classes.dialog}>Антон</div>
             <div className={classes.dialog}>Света</div>
             <div className={classes.dialog}>Дима</div>
         </div>
          <div className={classes.messages}>
              <div className={classes.message}>Привет</div>
              <div className={classes.message}>Как дела с учебой?</div>
              <div className={classes.message}>Что делаешь?</div>
          </div>
      </div>
    );
}

export default Dialogs;
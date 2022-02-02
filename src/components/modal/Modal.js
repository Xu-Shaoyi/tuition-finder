import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <p>Submitted Successfully!</p>

      <button className={classes.btn} onClick={props.onClose}>
        OK
      </button>
    </div>
  );
};

export default Modal;

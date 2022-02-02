import React from "react";
import { useRef } from "react";
import useState from "react-usestateref";

import classes from "./AgentForm.module.css";
import Modal from "../modal/Modal";
import Backdrop from "../modal/Backdrop";

const AgentForm = (props) => {
  const [modalState, setModalState, modalRef] = useState(false);

  const formRef = useRef();
  const nameInputRef = useRef();
  const levelInputRef = useRef();
  const subjectInputRef = useRef();
  const regionInputRef = useRef();
  const rateInputRef = useRef();
  const tutTypeInputRef = useRef();
  const contactInputRef = useRef();
  const remarksInputRef = useRef();

  function submitHandler(event) {
    //to prevent browser default
    event.preventDefault();
    const name = nameInputRef.current.value;
    const level = levelInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const region = regionInputRef.current.value;
    const rate = rateInputRef.current.value;
    const tutorType = tutTypeInputRef.current.value;
    const contactNo = contactInputRef.current.value;
    const remarks = remarksInputRef.current.value;

    const studentData = {
      name: name,
      level: level,
      subject: subject,
      region: region,
      rate: rate,
      tutorType: tutorType,
      contactNo: contactNo,
      remarks: remarks,
    };

    props.onAddStudent(studentData);

    formRef.current.reset();
    setModalState(true);
  }

  const closeModalHandler = () => {
    return setModalState(false);
  };

  return (
    <form ref={formRef} className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>Student Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label>Level</label>
        <select required id="level" ref={levelInputRef}>
          <option value="Pre-School">Pre-School</option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="Tertiary">Tertiary</option>
        </select>
      </div>
      <div className={classes.control}>
        <label>Subject</label>
        <select required id="subject" ref={subjectInputRef}>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Chinese">Chinese</option>
          <option value="Malay">Malay</option>
          <option value="Tamil">Tamil</option>
        </select>
      </div>
      <div className={classes.control}>
        <label>Region</label>
        <select required id="region" ref={regionInputRef}>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>
      <div className={classes.control}>
        <label>Rate/hr</label>
        <input
          type="number"
          onWheel={(e) => e.target.blur()}
          required
          id="rate"
          ref={rateInputRef}
        />
      </div>
      <div className={classes.control}>
        <label>Tutor Type</label>
        <select required id="tutorType" ref={tutTypeInputRef}>
          <option value="Under Graduate Part-Time Tutor">
            Under Graduate Part-Time Tutor
          </option>
          <option value="Graduate Part-Time Tutor">
            Graduate Part-time Tutor
          </option>
          <option value="Graduate Full-Time Tutor">
            Graduate Full-Time Tutor
          </option>
          <option value="Ex-MOE Full-Time Tutor">Ex-MOE Full-Time Tutor</option>
          <option value="Current-MOE Full-Time Tutor">
            Current-MOE Full-Time Tutor
          </option>
        </select>
      </div>
      <div className={classes.control}>
        <label>Agent Contact Number</label>
        <input
          type="number"
          onWheel={(e) => e.target.blur()}
          required
          id="contactNo"
          ref={contactInputRef}
        />
      </div>
      <div className={classes.control}>
        <label>Additional Remarks</label>
        <textarea id="remarks" required rows="5" ref={remarksInputRef} />
      </div>
      <div className={classes.actions}>
        <input type="submit" value="Submit" />
      </div>
      {modalRef.current && <Backdrop onClick={closeModalHandler} />}
      {modalRef.current && <Modal onClose={closeModalHandler} />}
    </form>
  );
};

export default AgentForm;

import React from "react";

import classes from "./ForAgents.module.css";
import AgentForm from "./form/AgentForm";

const ForAgents = () => {
  const addStudentHandler = (studentData) => {
    fetch(
      "https://tuition-finder-44683-default-rtdb.asia-southeast1.firebasedatabase.app/student-details.json",
      {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  return (
    <div>
      <h1 className={classes.agents}>Student Details Form</h1>
      <AgentForm onAddStudent={addStudentHandler} />
    </div>
  );
};

export default ForAgents;

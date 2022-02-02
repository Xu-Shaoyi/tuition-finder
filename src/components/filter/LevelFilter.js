import React from "react";
import StudentsList from "../studentsList/StudentsList";
import classes from "./LevelFilter.module.css";

const LevelFilter = (props) => {
  if (props.students.length === 0) {
    return <p>No Results</p>;
  }
  return (
    <div>
      <h1 className={classes.h1}>Filtered Students</h1>
      <StudentsList students={props.students} />
    </div>
  );
};

export default LevelFilter;

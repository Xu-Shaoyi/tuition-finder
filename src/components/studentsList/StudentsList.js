import React from "react";
import classes from "./StudentsList.module.css";
import StudentItem from "./StudentItem";

const StudentsList = (props) => {
  return (
    <ul className={classes.list}>
      {props.students.map((student) => (
        <StudentItem
          key={student.id}
          name={student.name}
          level={student.level}
          subject={student.subject}
          region={student.region}
          rate={student.rate}
          tutorType={student.tutorType}
          contactNo={student.contactNo}
          remarks={student.remarks}
        />
      ))}
    </ul>
  );
};

export default StudentsList;

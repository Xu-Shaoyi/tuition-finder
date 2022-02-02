import React from "react";

import classes from "./StudentItem.module.css";
import Card from "../ui/Card";

const StudentItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <h2 className={classes.name}>{props.name}</h2>
          <h4 className={classes.h4}>Level</h4> <p className={classes.p}>{props.level}</p>
          <br />
          <h4 className={classes.h4}>Subject </h4>
          <p className={classes.p}>{props.subject}</p>
          <br />
          <h4 className={classes.h4}>Region </h4>
          <p className={classes.p}>{props.region}</p>
          <br />
          <h4 className={classes.h4}>Rate/hr </h4>
          <p className={classes.p}>{props.rate}</p>
          <br />
          <h4 className={classes.h4}>Tutor Type </h4>
          <p className={classes.p}>{props.tutorType}</p>
          <br />
          <h4 className={classes.h4}>Agent Contact </h4>
          <p className={classes.p}>{props.contactNo}</p>
          <br />
          <h4 className={classes.h4}>Remarks </h4>
          <p className={classes.pBottom}>{props.remarks}</p>
        </div>
      </Card>
    </li>
  );
};

export default StudentItem;

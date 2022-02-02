import React, { useState } from "react";
import Select from "react-select";

import classes from "./FilterModal.module.css";
import Card from "../ui/Card";

const level = [
  { label: "Pre-School", value: "Pre-School" },
  { label: "Primary", value: "Primary" },
  { label: "Secondary", value: "Secondary" },
  { label: "Tertiary", value: "Tertiary" },
];

const subject = [
  { label: "English", value: "English" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Science", value: "Science" },
  { label: "Chinese", value: "Chinese" },
  { label: "Malay", value: "Malay" },
  { label: "Tamil", value: "Tamil" },
];

const region = [
  { label: "North", value: "North" },
  { label: "South", value: "South" },
  { label: "East", value: "East" },
  { label: "West", value: "West" },
];

const rate = [
  { label: 20, value: 20 },
  { label: 30, value: 30 },
  { label: 40, value: 40 },
  { label: 50, value: 50 },
  { label: 70, value: 70 },
];

const tutorType = [
  {
    label: "Under Graduate Part-Time Tutor",
    value: "Under Graduate Part-Time Tutor",
  },
  { label: "Graduate Part-Time Tutor", value: "Graduate Part-Time Tutor" },
  { label: "Graduate Full-Time Tutor", value: "Graduate Full-Time Tutor" },
  { label: "Ex-MOE Full-Time Tutor", value: "Ex-MOE Full-Time Tutor" },
  {
    label: "Current-MOE Full-time Tutor",
    value: "Current-MOE Full-time Tutor",
  },
];

const FilterModal = (props) => {
  const [levelSel, setLevelSel] = useState([]);
  const [subjectSel, setSubjectSel] = useState([]);
  const [regionSel, setRegionSel] = useState([]);
  const [tutTypeSel, setTutTypeSel] = useState([]);

  const handleLevel = (option) => {
    setLevelSel(option);
  };

  const handleSubject = (option) => {
    setSubjectSel(option);
  };

  const handleRegion = (option) => {
    setRegionSel(option);
  };

  const handleTutorType = (option) => {
    setTutTypeSel(option);
  };

  const filterHandler = () => {
    for (let i = 1; i <= 5; i++) {
      if (i === 1) {
        props.onChange(levelSel, 1);
      }
      if (i === 2) {
        props.onChange(subjectSel, 2);
      }
      if (i === 3) {
        props.onChange(regionSel, 3);
      }
      if (i === 4) {
        props.onChange(tutTypeSel, 4);
      }
      if (i === 5) {
        props.onSubmit();
      }
    }
  };

  return (
    <div>
      <Card>
        <h2 className={classes.h2}>Filters</h2>
        <p className={classes.label}>Filter by Level</p>
        <Select
          className={classes.select}
          isMulti
          isSearchable
          options={level}
          onChange={handleLevel}
        />
        <p className={classes.label}>Filter by Subject</p>
        <Select
          className={classes.select}
          isMulti
          isSearchable
          options={subject}
          onChange={handleSubject}
        />
        <p className={classes.label}>Filter by Region</p>
        <Select
          className={classes.select}
          isMulti
          isSearchable
          options={region}
          onChange={handleRegion}
        />
        <p className={classes.label}>Filter by Tutor Type</p>
        <Select
          className={classes.select}
          isMulti
          isSearchable
          options={tutorType}
          onChange={handleTutorType}
        />
        <button className={classes.button} onClick={filterHandler}>
          Submit
        </button>
      </Card>
    </div>
  );
};

export default FilterModal;

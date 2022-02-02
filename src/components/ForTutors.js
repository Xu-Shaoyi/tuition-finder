import React from "react";
import { useEffect } from "react";
import useState from "react-usestateref";
import StudentsList from "./studentsList/StudentsList";
import LevelFilter from "./filter/LevelFilter";
import FilterModal from "./filter/FilterModal";
import classes from "./ForTutors.module.css";

const ForTutors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showStudList, setShowStudList] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [done, setDone] = useState(false);
  const [loadedStudents, setloadedStudents] = useState([]);
  const [showFilter, setShowFilter] = useState();
  const [filteredStudents, setFilteredStudents, ref] = useState(loadedStudents);

  useEffect(() => {
    fetch(
      "https://tuition-finder-44683-default-rtdb.asia-southeast1.firebasedatabase.app/student-details.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // transform data (object) into students(array)
        const students = [];
        for (const key in data) {
          const student = {
            id: key,
            ...data[key],
          };

          students.push(student);
        }
        // tells react to re-evaluate the entire function again !!
        setIsLoading(false);
        setloadedStudents(students);
        setFilteredStudents(students);
      });
  }, []);

  const showFilterHandler = () => {
    setShowFilter(true);
    setShowStudList(false);
    setShowButton(false);
  };

  const filterHandler = (array, idx) => {
    if (array.length != 0) {
      if (idx === 1) {
        const fs = ref.current.filter((student) => {
          for (let i = 0; i < array.length; i++) {
            if (student.level === array[i].value) {
              return true;
            }
          }
          return false;
        });
        setFilteredStudents(fs);
      }
      if (idx === 2) {
        const fs = ref.current.filter((student) => {
          for (let i = 0; i < array.length; i++) {
            if (student.subject === array[i].value) {
              return true;
            }
          }
          return false;
        });
        setFilteredStudents(fs);
      }
      if (idx === 3) {
        const fs = ref.current.filter((student) => {
          for (let i = 0; i < array.length; i++) {
            if (student.region === array[i].value) {
              return true;
            }
          }
          return false;
        });
        setFilteredStudents(fs);
      }
      if (idx === 4) {
        const fs = ref.current.filter((student) => {
          for (let i = 0; i < array.length; i++) {
            if (student.tutorType === array[i].value) {
              return true;
            }
          }
          return false;
        });
        setFilteredStudents(fs);
      }
    }
  };

  const setDoneHandler = () => {
    setDone(true);
    setShowFilter(false);
  };

  const resetHandler = () => {
    setDone(false);
    setShowStudList(true);
    setShowButton(true);
    setFilteredStudents(loadedStudents);
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      {showStudList && <h1 className={classes.header}>Students</h1>}
      {showButton && (
        <button className={classes.filterButton} onClick={showFilterHandler}>
          Filter
        </button>
      )}
      {showStudList && <StudentsList students={loadedStudents} />}
      {showFilter && (
        <FilterModal
          students={loadedStudents}
          onChange={filterHandler}
          onSubmit={setDoneHandler}
        />
      )}
      {done && <LevelFilter students={ref.current} />}
      {done && (
        <button className={classes.resetButton} onClick={resetHandler}>
          Reset
        </button>
      )}
    </section>
  );
};

export default ForTutors;

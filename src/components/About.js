import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <h1 className={classes.h1}>About Us</h1>

      <h2 className={classes.h2}>
        - A platform catered specially for tutors -
      </h2>

      <img className={classes.img}
        src="https://images.pexels.com/photos/4260323/pexels-photo-4260323.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4260323.jpg&fm=jpg"
        alt="tuition"
      />

      <p className={classes.intro}>
        - Find suitable students efficiently
        <br />
        <br />- Sort students according to region, education level and many
        more!
      </p>
    </div>
  );
};

export default About;

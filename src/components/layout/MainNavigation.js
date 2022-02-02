import React from "react";
import { Link } from "react-router-dom";
import useState from "react-usestateref";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tuition Finder</div>
      <nav>
        <button className={classes.menuIcon} onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        <ul className={isMobile ? classes.ulMobile : classes.ul} onClick={() => {setIsMobile(false)}}>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/for-agents">For Agents</Link>
          </li>
          <li>
            <Link to="/for-tutors">For Tutors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

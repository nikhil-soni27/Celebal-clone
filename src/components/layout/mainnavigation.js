import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React 1st Project </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New meetups</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;

import classes from "./meetupitem.module.css";
import Card from "../ui/Card";
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>FAVOURITES</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
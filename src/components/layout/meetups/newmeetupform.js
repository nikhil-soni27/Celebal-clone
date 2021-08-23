import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./newmeetup.module.css";
function NewMeetupForm(props) {
  const titleinput = useRef();
  const Imageinput = useRef();
  const addressinput = useRef();
  const descripitoninput = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredtitle = titleinput.current.value;
    const enteredimage = Imageinput.current.value;
    const enteredaddress = addressinput.current.value;
    const entereddescription = descripitoninput.current.value;

    const meetupdata = {
      title: enteredtitle,
      image: enteredimage,
      address: enteredaddress,
      descripiton: entereddescription,
    };
    props.onAddMeetup(meetupdata);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleinput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="Image" ref={Imageinput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">address</label>
          <input type="text" required id="address" ref={addressinput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Title</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descripitoninput}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;

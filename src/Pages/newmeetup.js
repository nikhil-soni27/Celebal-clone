import { useHistory } from "react-router";
import NewMeetupForm from "../components/layout/meetups/newmeetupform";

function Newmeetuppage() {
  // const history = useHistory();
  // function addmeetupHandler(meetupdata) {
  //   fetch("https://react-abd3f-default-rtdb.firebaseio.com/meetups.json", {
  //     method: "Post",
  //     body: JSON.stringify(meetupdata),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then(() => {
  //     history.replace("/");
  //   });
  // }
  return (
    <section>
      <h1>New Meetup page </h1>
      <NewMeetupForm />
    </section>
  );
}

export default Newmeetuppage;

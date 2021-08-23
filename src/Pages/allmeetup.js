import { useState, useEffect } from "react";

import Meetuplist from "../components/layout/meetups/meetuplist";

function Allmeetuppage() {
  const [isloading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://react-abd3f-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // if (isloading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }
  return (
    <section>
      <h1>My Name is </h1>
      <Meetuplist meetups={loadedMeetups} />
    </section>
  );
}

export default Allmeetuppage;

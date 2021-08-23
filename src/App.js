import { Route } from "react-router-dom";
import Allmeetuppage from "./Pages/allmeetup";
import Newmeetuppage from "./Pages/newmeetup";
import Favouritepage from "./Pages/favourite";
import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Allmeetuppage />
      </Route>
      <Route path="/new-meetup">
        <Newmeetuppage />
      </Route>
      <Route path="/favourite">
        <Favouritepage />
      </Route>
    </Layout>
  );
}

export default App;

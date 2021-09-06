import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Layout>
  );
}

export default App;

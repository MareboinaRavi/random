import "./App.css";
import Navbar from "./Component/Navbar";
// import Contact from "./Component/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Component/Details";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact>
            <Navbar />
          </Route>
          <Route path="/details/:id" exact>
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

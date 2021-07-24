// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Redirect from "./Components/Redirect";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route path="/:shortenedURL">
            <Redirect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";
import About from "../containers/About";
import Profile from "../containers/Profile";
import NotFound from "../containers/NotFound";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile/:username/:id" component={Profile} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

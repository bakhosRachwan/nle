import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;

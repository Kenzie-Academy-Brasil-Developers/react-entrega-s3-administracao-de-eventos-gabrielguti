import { Route, Switch } from "react-router";
import Wedding from "../pages/wedding";
import Party from "../pages/party";
import Graduation from "../pages/graduation";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/party">
        <Party />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
    </Switch>
  );
};
export default Routes;

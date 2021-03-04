import { Route, Switch } from "react-router-dom";
import Yoda from "./containers/Yoda";
import Home from "./containers/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/yoda" exact component={Yoda} />
    </Switch>
  );
};
export default App;

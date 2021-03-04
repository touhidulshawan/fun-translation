import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Yoda from "./containers/Yoda";
import Minion from "./containers/Minion";
import Dothraki from "./containers/Dothraki";
import Valyrian from "./containers/Valyrian";
import Mandalorian from "./containers/Mandalorian";
import Shakespeare from "./containers/Shakespeare";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/yoda" exact component={Yoda} />
      <Route path="/minion" exact component={Minion} />
      <Route path="/dothraki" exact component={Dothraki} />
      <Route path="/valyrian" exact component={Valyrian} />
      <Route path="/mandalorian" exact component={Mandalorian} />
      <Route path="/shakespeare" exact component={Shakespeare} />
    </Switch>
  );
};
export default App;

import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;

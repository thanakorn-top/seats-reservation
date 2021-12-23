import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import NewsPage from "./components/pages/NewsPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/news" />
      </Route>
      <Route path="/news">
        <NewsPage />
      </Route>
      <Route path="/home">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;

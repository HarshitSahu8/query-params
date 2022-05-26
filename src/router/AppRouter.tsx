import { Route, Switch } from "react-router-dom";
import CheckBox from "../components/CheckBox";
import FileUpload from "../components/FileUpload";
import Home from "../pages/Home";
import Main from "../pages/main";
import Summary from "../pages/summary";
const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/summary">
          <Summary />
        </Route>
        <Route exact path="/FileUpload">
          <FileUpload />
        </Route>
        <Route exact path="/CheckBox">
          <CheckBox />
        </Route>
      </Switch>
    </>
  );
};

export default AppRouter;

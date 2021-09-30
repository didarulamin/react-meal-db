import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Meals from "./components/Meals/Meals";
import Meal from "./components/Meal/Meal";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/restaurant">
            <Meals></Meals>
          </Route>
          <Route exact path="/">
            <Meals></Meals>
          </Route>
          <Route path="/meal/:id">
            <Meal></Meal>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

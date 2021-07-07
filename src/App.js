import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Header */}
        <Header />
        <div className="container">
          <Switch>
            <Route path="/projects" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

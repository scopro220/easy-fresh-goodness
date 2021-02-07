import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Search from "./Search";
import Header from "./Header";
import RecipePage from "./RecipePage";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/search" exact component={Search} />
          <Route path="/recipe/:recipeid" exact component={RecipePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

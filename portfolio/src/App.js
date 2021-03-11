import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
    //   </Switch>
    // </BrowserRouter>
    <>
    <Home/>
    </>
  );
}

export default App;

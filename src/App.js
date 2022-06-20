import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Welcome from "./Pages/Welcome";
import { GlobalStyle } from "./styles/global";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <SignUp setName={setName} />
        </Route>
        <Route exact path="/welcome">
          <Welcome name={name} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

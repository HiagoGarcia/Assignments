import './App.css';
import React from 'react';
import Home from './Components/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to='/'>Home</Link>
        &nbsp;|&nbsp;
        <Link to='/4'>Number 4</Link>
        &nbsp;|&nbsp;
        <Link to='/hello'>Hello</Link>
      </p>
      <Switch>
        <Route exact path="/">
          <h1>Welcome</h1>
        </Route>
        <Route path="/:item/:color/:backgroundColor">
          <Home />
        </Route>
        <Route exact path="/:item/:color">
          <Home />
        </Route>
        <Route exact path="/:item">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


{/* <Route path="/:item">
  <Route path=":color">
    <Route path=":backgroundColor" element = {<Home/>}>
    </Route>
  </Route>
</Route> */}
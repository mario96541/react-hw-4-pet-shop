import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import Nav from './NavLink/Navigation';
import PetsPage from '../pages/PetsList/PetsPages';
import PetPage from '../pages/PetPages';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Route path="/about" component={AboutPage} />
      <Redirect push to="/" />
    </Switch>
  </div>
);

export default App;

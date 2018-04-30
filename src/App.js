import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Kitchen from './components/Kitchen/Kitchen';
import AddFoodForm from './components/Kitchen/AddFoodForm/AddFoodForm';
import ItemSelectPage from './components/RecipeSearch/ItemSelectPage/ItemSelectPage';
import SearchParamsPage from './components/RecipeSearch/SearchParamsPage/SearchParamsPage';
import RecipeListPage from './components/RecipeSearch/RecipeListPage/RecipeListPage';

import './styles/main.css';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/addfood" component={AddFoodForm} />
        <Route path="/itemselect" component={ItemSelectPage} />
        <Route path="/searchparams" component={SearchParamsPage} />
        <Route path="/recipes" component={RecipeListPage} />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;

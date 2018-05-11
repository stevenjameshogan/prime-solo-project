import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import  { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import KitchenHome from './components/Kitchen/KitchenHome';
import AddFoodForm from './components/Kitchen/AddFoodForm/AddFoodForm';
import FoodList from './components/RecipeSearch/FoodList/FoodList';
import SearchParams from './components/RecipeSearch/SearchParams/SearchParams'
import RecipeList from './components/RecipeSearch/RecipeList/RecipeList';
import RecipeItem from './components/RecipeSearch/RecipeList/RecipeItem/RecipeItem';
import SelectedRecipe from './components/RecipeSearch/SelectedRecipe/SelectedRecipe';

import './styles/main.css';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#76d275',
      main: '#43a047',
      dark: '#00701a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div id="appRoot">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/kitchen" component={KitchenHome} />
            <Route path="/addfood" component={AddFoodForm} />
            <Route path="/itemselect" component={FoodList} />
            <Route path="/searchparams" component={SearchParams} />
            <Route path="/recipelist" component={RecipeList} />
            <Route path="/recipeitem" component={RecipeItem} />
            <Route path="/selectedrecipe" component={SelectedRecipe} />

            {/* OTHERWISE (no path!) */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
    </div>
  </MuiThemeProvider>
);

export default App;

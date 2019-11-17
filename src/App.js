import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/navBar/NavBar";
import AddTodo from "./components/addTodo/AddTodo";
import EditTodo from "./components/editTodo/EditTodo"
import Login from "./components/auth/Login";
import PageNotFound from "./components/pages/PageNotFound";
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
      <Router>
          <div>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/create">
                    <AddTodo />
                </Route>
                <PrivateRoute path='/edit/:id' component={EditTodo} />
                {/*<Route path="/edit/:id">*/}
                {/*    <EditTodo />*/}
                {/*</Route>*/}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;

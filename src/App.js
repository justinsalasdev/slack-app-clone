import './App.css';
import Login from './components/Login/login'
import LoginForm from './components/Login/LoginForm'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Redirect
} from "react-router-dom";

const App = () => {


  return (
    <Router>
    <Switch>
      
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/login">
        <LoginForm />
      </Route>

    </Switch>
  </Router>

  );
}

export default App;


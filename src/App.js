import './App.css';
import Nav from './components/navigation/Nav';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/pages/Home';
import Card from "./components/pages/card/Card"
import Details from './components/pages/details/Details';
import {Provider} from "react-redux"
import store from "./store"
import Login from './components/pages/Auth/login/Login';
import Course from './components/pages/courses/Course';
import Register from './components/pages/Auth/register/Register';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/card" component={Card}></Route>
          <Route path="/details/:id" exact component={Details}></Route>
          <Route path="/login"  component={Login}></Route>
          <Route path="/course"  component={Course}></Route>
          <Route path="/register"  component={Register}></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

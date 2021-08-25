import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './components/login/login';
import Main from './components/main/main';
import Maker from './components/maker/maker';
import Register from './components/Register/register';

function App({authService}) {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/login">
            <Login authService={authService}/>
          </Route>
          <Route path="/register">
            <Register authService={authService}/>
          </Route>
          <Route path="/maker">
            <Maker authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

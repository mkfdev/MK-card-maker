import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './components/login/login';
import Main from './components/main/main';
import Maker from './components/maker/maker';
import Register from './components/Register/register';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/maker">
            <Maker/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

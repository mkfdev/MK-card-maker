import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main/main';
import Maker from './components/maker/maker';
import Register from './components/Register/register';
import styles from './app.module.css';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
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
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

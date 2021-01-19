import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Footer, Login, Home, SubInfo } from './container';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route>
          <Header />
          <Switch>
            <Route exact path='/subscription-info' component={SubInfo}/>
            <Route exact path='/landing/bulk-purchase' />
            <Route exact path='/story/brand' />
            <Route exact path='/FAQ' />
            <Route path='/' component={Home}/>
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

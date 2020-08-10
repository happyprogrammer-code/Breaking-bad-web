import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './homepage/App';
import Footer from './homepage/Footer';
import MainCharacter from './character/MainCharacter';
import Character from './character/Character'
import MainEps from './episode/MainEps'
import Episode from './episode/Episode'
import MainQuotes from './quotes/mainQuotes'
import MainDeaths from './death/MainDeaths'
import Death from './death/Death'

export default function ActuallApp() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:charaname" component={Character}/>
        <Route path="/episode/:episodeName" component={Episode}/>
        <Route path="/deaths/:deathId" component={Death}/>
        <Route path="/" exact component={App} />
        <Route path="/character" exact component={MainCharacter} />
        <Route path="/episode" exact component={MainEps} />
        <Route path="/quotes" exact component={MainQuotes} />
        <Route path="/deaths" exact component={MainDeaths} />
        <Route
          path="/"
          render={() => {
            return (
              <h1
                style={{
                  fontFamily: 'helvetica, arial, sans-serif',
                  fontSize: '300px',
                  color: 'pink',
                }}
              >
                ERROR 404
              </h1>
            );
          }}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

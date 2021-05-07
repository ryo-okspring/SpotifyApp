import React from 'react';
import "./App.css";
import Footer from './footer.js';
import Header from "./header.js";
import Spotify from './spotifyApp.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {



  return (

    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Spotify />

          <Route path={'/spotify'} component={Spotify}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
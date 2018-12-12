import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/home';
import Footer from './components/footer';
import NavBar from './components/navbar';
// import Tasks from './components/tasks';
// import Contact from './containers/contact';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      network: 'Loading...',
    };
  }

  render() {
    //https://github.com/dwyl/learn-tachyons/issues/10
    //https://github.com/redux-observable/redux-observable/issues/313

    return (
      <Router>
        <div className=''>
          <Switch>
            <Route exact path='/404' status={404} render={() => <h1>404 Not Found</h1>} />
            <Route render={() => 
                <div className=''>                               
                  <NavBar />
                  <Switch>
                    <Route exact path="/" render={Home} />
                    {/* <Route path="/portfolio" render={Tasks} />
                    <Route path="/contact" component={Contact} /> */}
                    <Redirect to="/404" />
                  </Switch>
                  <Footer />
                </div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

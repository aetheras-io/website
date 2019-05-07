import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToRoute from './utils/ScrollToRoute';
import Home from './components/Home';
import Tasks from './components/Tasks';
// import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import './styles/app.css';

class App extends React.Component {
    state = {
        network: 'Loading...'
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Router>
                    <Switch>
                        <ScrollToRoute exact path="/" component={Home} />
                        <ScrollToRoute path="/portfolio" component={Tasks} />
                        {/* <ScrollToRoute path="/contact" component={Contact} /> */}
                        <ScrollToRoute path="/about" component={About} />
                        <ScrollToRoute
                            exact
                            path="/404"
                            status={404}
                            component={NotFound}
                        />
                        <Redirect to="/404" />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;

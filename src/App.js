import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import locale from './i18n/locale';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToRoute from './utils/ScrollToRoute';
import Home from './components/Home';
import Tasks from './components/Tasks';
// import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import './styles/app.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'flag-icon-css/css/flag-icon.min.css';

addLocaleData([...en, ...zh]);

class App extends React.Component {
    state = {
        network: 'Loading...',
        currentLocale: locale[0]
    };

    setLocale = (locale) => {
        this.setState({ currentLocale: locale });
    }

    render() {
        const { currentLocale } = this.state;
        return (
            <IntlProvider locale={currentLocale.locale} messages={currentLocale.messages}>
                <React.Fragment>
                    <CssBaseline />
                    <Router>
                        <React.Fragment>
                            <Navbar locale={locale} setLocale={this.setLocale} />
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
                            <Footer />
                        </React.Fragment>
                    </Router>
                </React.Fragment>
            </IntlProvider>
        );
    }
}

export default App;

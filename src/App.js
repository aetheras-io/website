import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import localeConfig from './i18n/locale-config';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToRoute from './components/shared/ScrollToRoute';
import IntlComponent from './components/shared/IntlComponent';
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

class App extends IntlComponent {
    constructor(props) {
        super(props);
        const browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
        this.defaultLocale = (localeConfig.find(l => l.languageCode === browserLanguage || l.locale === browserLanguage) || localeConfig[0]);
        this.state = {
            network: 'Loading...',
            currentLocale: this.defaultLocale
        };
    }

    setLocale = (locale) => {
        this.setState({ currentLocale: locale });
    }

    componentDidMount() {
        const { currentLocale } = this.state;
        if (currentLocale) {
            this.loadLocaleData({
                intl: {
                    locale: currentLocale.locale,
                    defaultLocale: this.defaultLocale.locale
                }
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const { currentLocale } = this.state;
        if (nextState.currentLocale.locale !== currentLocale.locale) {
            this.loadLocaleData({
                intl: {
                    locale: nextState.currentLocale.locale,
                    defaultLocale: this.defaultLocale.locale
                }
            });
        }
    }

    render() {
        const { currentLocale, intlData } = this.state;

        if (!intlData) {
            return null;
        }

        return (
            <IntlProvider locale={currentLocale.locale} messages={intlData.static}>
                <React.Fragment>
                    <CssBaseline />
                    <Router>
                        <React.Fragment>
                            <Navbar locale={localeConfig} setLocale={this.setLocale} />
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
